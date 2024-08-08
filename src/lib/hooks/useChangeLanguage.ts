import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const useChangeLanguage = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const changeLanguage = useCallback(
    (language: string) => {
      // Split the current path and filter out empty segments
      const pathSegments = currentPath!.split("/").filter((segment) => segment);

      // Remove the current language segment if present
      if (
        pathSegments[0] === "en" ||
        pathSegments[0] === "fr" ||
        pathSegments[0] === "ar"
      ) {
        pathSegments.shift();
      }

      // Construct the new path with the selected language
      const newPath = `/${language}/${pathSegments.join("/")}`;

      // Use `router.push` to trigger a proper navigation event
      router.push(newPath);
    },
    [router, currentPath]
  );

  return changeLanguage;
};

export default useChangeLanguage;
