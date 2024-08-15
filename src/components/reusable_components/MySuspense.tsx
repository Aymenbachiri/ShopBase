import { Suspense } from "react";
import LoadingLoader from "./LoadingLoader";

export default function MySuspense({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingLoader />}>{children}</Suspense>;
}
