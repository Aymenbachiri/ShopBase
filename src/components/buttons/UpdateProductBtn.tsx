"use client";

import { useTranslations } from "next-intl";

export default function UpdateProductBtn({ loading }: { loading: boolean }) {
  const t = useTranslations("EditProductPage");

  return (
    <>
      {!loading ? (
        <button
          className="px-4 py-2 mt-8 bg-blue-600 duration-300 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          type="submit"
        >
          {t("UpdateBtn")}
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex justify-center items-center"
          type="submit"
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
}
