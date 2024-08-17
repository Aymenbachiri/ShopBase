declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_URL_INTERNAL: string;
    NEXT_PUBLIC_JWT_SECRET: string;
    USERNAME: string;
    PASSWORD: string;
    NEXT_PUBLIC_MONGODB_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    NEXT_PUBLIC_SECRET_KEY: string;
  }
}
