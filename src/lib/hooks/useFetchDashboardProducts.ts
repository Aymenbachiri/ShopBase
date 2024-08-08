import useSWR from "swr";
import { SwrFetcher } from "../helpers/SwrFetcher";
import type { ProductsType } from "../types/types";

export const useFetchDashboardProducts = (name: string | null | undefined) => {
  const { data, mutate, error, isLoading } = useSWR<ProductsType[]>(
    name ? `/api/dashboardProducts?creator=${name}` : null,
    SwrFetcher
  );

  return { data, mutate, error, isLoading };
};
