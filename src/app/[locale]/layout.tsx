import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import AuthProvider from "@/lib/providers/AuthProvider";
import LocaleProvider from "@/lib/providers/LocaleProvider";
import ReduxProvider from "@/lib/providers/ReduxProvider";
import SmoothScrollProvider from "@/lib/providers/SmoothScrollProvider";
import ThemeProvider from "@/lib/providers/ThemeProvider";
import type { LocaleLayoutProps } from "@/lib/types/types";
import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

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
    <LocaleProvider locale={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <AuthProvider>
          <ThemeProvider>
            <SmoothScrollProvider />
            <ReduxProvider>
              <NextTopLoader />
              <main dir={dir}>
                <Navbar />
                {children}
                <Footer />
                <Toaster position="top-center" />
              </main>
            </ReduxProvider>
          </ThemeProvider>
        </AuthProvider>
      </NextIntlClientProvider>
    </LocaleProvider>
  );
}
