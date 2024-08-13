import { Suspense } from "react";
import LoadingDots from "./LoadingDots";

export default function MySuspense({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingDots />}>{children}</Suspense>;
}
