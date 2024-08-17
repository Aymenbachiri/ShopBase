import { unstable_setRequestLocale } from "next-intl/server";

export default function LocaleProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  unstable_setRequestLocale(locale);

  return <>{children}</>;
}
