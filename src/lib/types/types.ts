import type { Session } from "next-auth";

export type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export type LocaleMenuProps = {
  buttonText: string;
};

export type MobileNavbarLinkProps = {
  link: {
    href: string;
    label: string;
  };
};

export type AuthProviderProps = {
  children: React.ReactNode;
  session?: Session | null | undefined;
};
