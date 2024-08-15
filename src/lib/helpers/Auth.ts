import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import { credentialsSchema } from "../schemas/credentialsSchema";
import connectToDB from "../database/database";
import User from "../database/models/User";
import { getErrorMessage } from "./getErrorMessage";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "";
const COOKIE_NAME = "auth-token";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const parsedCredentials = credentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Invalid credentials format:", credentials);
          throw new Error("Invalid credentials");
        }

        const { email, password } = parsedCredentials.data;

        await connectToDB();

        try {
          const user = await User.findOne({ email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              password,
              user.password
            );
            if (isPasswordCorrect) {
              // Generate JWT token
              const token = jwt.sign(
                { userId: user._id, email: user.email },
                JWT_SECRET,
                { expiresIn: "1h" } // Token expires in 1 hour
              );

              // Set secure cookie
              const secureCookie = serialize("authToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
                maxAge: 3600, // 1 hour
              });

              // Return user and set cookie in response headers
              return {
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                token,
                cookie: secureCookie,
              };
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error(getErrorMessage(error));
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true;
      }
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/register",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: JWT_SECRET,
  },
  cookies: {
    sessionToken: {
      name: COOKIE_NAME,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      },
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
