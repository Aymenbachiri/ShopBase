import { getTranslations } from "next-intl/server";
import type { TypedTranslator } from "../types/types";

export async function ServerTranslation<Namespace extends keyof IntlMessages>(
  namespace: Namespace
) {
  const t = await getTranslations(namespace);

  return {
    t: t as unknown as TypedTranslator<IntlMessages[Namespace]>,
  };
}
