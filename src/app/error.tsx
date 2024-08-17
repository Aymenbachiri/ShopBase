"use client";

import { useState } from "react";
import errorImg from "/public/assets/images/error.webp";
import MyImage from "@/components/reusable_components/MyImage";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    setIsLoading(true);
    reset();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <article className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <header className="flex flex-col md:flex-row items-center">
            <figure className="w-full md:w-1/2 mb-6 md:mb-0">
              <MyImage
                src={errorImg}
                alt="Error illustration"
                className="w-full h-auto rounded-lg"
                width={340}
                height={260}
                sizes="(min-width: 1120px) 480px, (min-width: 780px) 43.13vw, calc(100vw - 96px)"
              />
            </figure>
            <section className="w-full md:w-1/2 md:pl-8">
              <h1 className="text-2xl font-bold text-red-600 mb-2">Oops!</h1>
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                {error.message || "Something went wrong"}
              </h2>
              <p className="text-gray-600 mb-6">
                Please try again later or contact support if the problem
                persists.
              </p>
              <nav className="space-y-4">
                <button
                  onClick={handleReset}
                  disabled={isLoading}
                  className="w-full flex justify-center items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-live="polite"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  )}
                  <span>{isLoading ? "Trying again..." : "Try again"}</span>
                </button>
                <Link
                  href="/"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Go back home</span>
                </Link>
              </nav>
            </section>
          </header>
        </div>
      </article>
    </main>
  );
}
