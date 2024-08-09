import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";
import { ProductsType } from "@/lib/types/types";

export const useDeleteProduct = () => {
  const t = useTranslations("DashboardPage");
  const { mutate } = useSWRConfig();
  const { data: session } = useSession();

  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm(t("DeleteProductAlert"));

      if (confirmed) {
        mutate(
          `/api/dashboardProducts?creator=${session?.user?.name}`,
          (currentData: ProductsType[] | undefined) =>
            currentData
              ? currentData.filter((product) => product._id !== id)
              : [],
          false
        );

        const res = await fetch(`/api/products/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to delete product");
        }

        mutate(`/api/dashboardProducts?creator=${session?.user?.name}`);
      }
    } catch (error) {
      console.error(error);
      mutate(`/api/dashboardProducts?creator=${session?.user?.name}`);
    }
  };

  return handleDelete;
};
