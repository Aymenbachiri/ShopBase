import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/lib/providers/AuthProvider";
import ProgressBarProvider from "@/lib/providers/ProgressBarProvider";
import SmoothScrollProvider from "@/lib/providers/SmoothScroll";
import ThemeProvider from "@/lib/providers/ThemeProvider";
import type { LocaleLayoutProps } from "@/lib/types/types";
import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";
import "/src/app/globals.css";

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = useMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const nextLocale = useLocale();

  if (nextLocale !== locale) notFound();

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <AuthProvider>
          <ThemeProvider>
            <SmoothScrollProvider>
              <ProgressBarProvider>
                <main dir={dir}>
                  <Navbar />
                  {children}
                  <Toaster position="top-center" />
                </main>
              </ProgressBarProvider>
            </SmoothScrollProvider>
          </ThemeProvider>
        </AuthProvider>
      </NextIntlClientProvider>
    </>
  );
}
