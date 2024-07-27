"use client";

import LogoutBtn from "@/components/auth/LogoutBtn";
import { Link } from "@/navigation";
import { useSession } from "next-auth/react";

export default function LoginCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  if (status === "loading") {
    return;
  }

  if (status === "authenticated") {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            You are already logged in
          </h1>
          <p className="mt-4 text-gray-500">
            You are already logged in. You can go to the{" "}
            <Link href="/dashboard" className="underline">
              Dashboard
            </Link>
            or <LogoutBtn />
          </p>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
