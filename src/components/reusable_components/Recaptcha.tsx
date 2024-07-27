"use client";

import type { RecaptchaProps } from "@/lib/types/types";
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha({ onChange }: RecaptchaProps) {
  return (
    <ReCAPTCHA
      onChange={onChange}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      className="mx-auto"
    />
  );
}
