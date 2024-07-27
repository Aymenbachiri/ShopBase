import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/lib/providers/AuthProvider";
import SmoothScrollProvider from "@/lib/providers/SmoothScroll";
import ThemeProvider from "@/lib/providers/ThemeProvider";
import { ToastProvider } from "@/lib/providers/ToastProvider";
import type { LocaleLayoutProps } from "@/lib/types/types";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata() {
  const t = await getTranslations("HomePageSeo");

  return {
    title: t("Title"),
    description: t("Description"),
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
              <ToastProvider>
                <main dir={dir}>
                  <Navbar />
                  {children}
                </main>
              </ToastProvider>
            </SmoothScrollProvider>
          </ThemeProvider>
        </AuthProvider>
      </NextIntlClientProvider>
    </>
  );
}
