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
