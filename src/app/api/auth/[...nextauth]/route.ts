import NextAuth from "next-auth/next";
import CredentialsProvider, {
  type CredentialInput,
  type CredentialsConfig,
} from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { credentialsSchema } from "@/lib/schemas/credentialsSchema";
import connectToDB from "@/lib/database/database";
import User from "@/lib/database/models/User";
import { getErrorMessage } from "@/lib/hooks/getErrorMessage";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "";
const COOKIE_NAME = "auth-token";

const handler = NextAuth({
  providers: [
    CredentialsProvider(<CredentialsConfig<Record<string, CredentialInput>>>(<
      unknown
    >{
      id: "credentials",
      name: "Credentials",
      async authorize(credentials: Credential) {
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
              return { ...user.toObject(), token, cookie: secureCookie };
            } else {
              console.error("Wrong password for user:", email);
              throw new Error("Wrong Credentials");
            }
          } else {
            console.error("User not found for email:", email);
            throw new Error("User not found");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error(getErrorMessage(error));
        }
      },
    })),
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
});

export { handler as GET, handler as POST };
