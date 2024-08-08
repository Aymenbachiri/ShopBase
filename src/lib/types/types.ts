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

export type LoginBtnProps = {
  loading: boolean;
  captcha: boolean;
  LoginButton: string;
};

export type RegisterUserSchemaErrors = {
  nameRequired: string;
  invalidEmail: string;
  passwordMinLength: string;
  confirmPasswordMinLength: string;
  passwordsDoNotMatch: string;
  registration: string;
  captchaFailed: string;
  loginSuccess: string;
  loginFailed: string;
};

export type MessageKeys<T, K extends keyof T> = K;

export type TranslationFunction = {
  <
    TargetKey extends MessageKeys<
      RegisterUserSchemaErrors,
      keyof RegisterUserSchemaErrors
    >
  >(
    key: TargetKey
  ): string;
};

export type TranslationFunctionWithStringFallback = TranslationFunction &
  ((key: string) => string);

export type SellProductBtnProp = {
  loading: boolean;
  captcha: boolean;
  SellProductButton: string;
};

export type ProductsType = {
  _id: string;
  id?: string;
  title: string;
  description: string;
  category: "men" | "women" | "electronics" | "jewelery";
  imageurl: string;
  price: number;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
  rating?: number;
  quantity?: number;
};

export type DashboardProductCardProps = {
  product: ProductsType;
};

export type DeleteProductProps = {
  id: string;
};

export type EditProductPageProps = {
  params: { productId: string };
};

export type EditProductFormProps = {
  product: {
    _id: string;
    title: string;
    description: string;
    category: "men" | "women" | "electronics" | "jewelery";
    imageurl: string;
    price: number;
    creator: string;
  };
};
