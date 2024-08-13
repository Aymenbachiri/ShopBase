"use client";

import { useSession } from "next-auth/react";
import useSWR from "swr";
import DashboardProductCard from "@/components/products/DashboardProductCard";
import { ProductsType } from "@/lib/types/types";
import { Link } from "@/navigation";
import { SwrFetcher } from "@/lib/helpers/SwrFetcher";
import { ClientTranslation } from "@/lib/helpers/ClientTranslation";
import LoadingDots from "@/components/reusable_components/LoadingDots";

export default function DashboardPage() {
  const { t } = ClientTranslation("DashboardPage");
  const { data: session } = useSession();
  const {
    data: dashboardProducts,
    error,
    isLoading,
  } = useSWR<ProductsType[]>(
    session?.user?.name
      ? `/api/dashboardProducts?creator=${session.user.name}`
      : null,
    SwrFetcher
  );

  if (isLoading) return <LoadingDots />;
  if (error) return <div>Failed to load products</div>;

  if (!dashboardProducts || dashboardProducts.length === 0) {
    return (
      <main className="flex justify-center items-center mt-[30%] gap-4">
        <h1 className="">{t("NoProductHeader")}</h1>
        <Link href="/sell" className="underline">
          {t("NoProductLink")}
        </Link>
      </main>
    );
  }

  return (
    <main className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20 md:mt-[200px] md:mx-[200px]">
      {dashboardProducts.map((item: ProductsType) => (
        <DashboardProductCard key={item._id} product={item} />
      ))}
    </main>
  );
}
