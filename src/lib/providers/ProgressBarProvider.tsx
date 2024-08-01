"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "/src/app/globals.css";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  NProgress.configure({ showSpinner: true });

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    handleStart();
    handleStop();

    return () => {
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default ProgressBarProvider;
