declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_URL_INTERNAL: string;
    JWT_SECRET: string;
    USERNAME: string;
    PASSWORD: string;
    MONGODB_URL: string;
    API_URL: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    NEXT_PUBLIC_SECRET_KEY: string;
  }
}
