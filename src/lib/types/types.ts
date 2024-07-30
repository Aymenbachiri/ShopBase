import type { Session } from "next-auth";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

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

export type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error: FieldError | undefined;
};

export type RecaptchaProps = {
  onChange: ((token: string | null) => void) | undefined;
};

export type RegisterBtnProp = {
  loading: boolean;
  captcha: boolean;
  RegisterButton: string;
};
