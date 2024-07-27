"use client";

import { SessionProvider } from "next-auth/react";
import type { AuthProviderProps } from "../types/types";

export default function AuthProvider({ children, session }: AuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
