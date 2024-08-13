import type { TypedTranslator } from "../types/types";
import { useTranslations } from "next-intl";

export function ClientTranslation<Namespace extends keyof IntlMessages>(
  namespace: Namespace
) {
  const t = useTranslations(namespace);

  return {
    t: t as unknown as TypedTranslator<IntlMessages[Namespace]>,
  };
}
