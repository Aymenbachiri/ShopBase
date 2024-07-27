import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { credentialsSchema } from "@/lib/schemas/credentialsSchema";
import connectToDB from "@/lib/database/database";
import User from "@/lib/database/models/User";
import { getErrorMessage } from "@/lib/hooks/getErrorMessage";

const JWT_SECRET = process.env.JWT_SECRET || "";
const COOKIE_NAME = "auth-token";

const handler = NextAuth({
  providers: [
    CredentialsProvider(<any>{
      id: "credentials",
      name: "Credentials",
      async authorize(credentials: any) {
        const parsedCredentials = credentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          throw new Error("Invalid credentials");
        }

        const { email, password } = parsedCredentials.data;

        await connectToDB();

        try {
          const user = await User.findOne({ email: email });

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
              return { ...user.toObject(), token, cookie: secureCookie };
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          return {
            error: getErrorMessage(error),
          };
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true; // Return true to proceed with sign in
    },
    async jwt({ token, user }) {
      if (user) {
        token = {
          id: user.id,
          email: user.email,
          name: user.name,
          // token: user.token,
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
});
export { handler as GET, handler as POST };
