"use client";

import type { LoginBtnProps } from "@/lib/types/types";

export default function LoginBtn({
  loading,
  captcha,
  LoginButton,
}: LoginBtnProps) {
  return (
    <>
      {!loading ? (
        <button
          className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            !captcha ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={!captcha}
        >
          {LoginButton}
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
