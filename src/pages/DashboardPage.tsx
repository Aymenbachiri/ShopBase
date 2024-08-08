import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardProductCard from "@/components/products/DashboardProductCard";
import { getDashboardProducts } from "@/lib/helpers/getDashboardProducts";
import { ProductsType } from "@/lib/types/types";
import { Link } from "@/navigation";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const dashboardProducts: ProductsType[] | null = session?.user.name
    ? await getDashboardProducts(session?.user.name)
    : null;

  if (!dashboardProducts) {
    return (
      <main>
        <h1 className="mt-10">You don&apos;t have any product.</h1>
        <Link href="/sell" className="ml-2 underline">
          Sell One
        </Link>
      </main>
    );
  }

  return (
    <main className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 md:mt-[200px] md:mx-[200px]">
      {dashboardProducts?.map((item: ProductsType) => (
        <DashboardProductCard key={item._id} product={item} />
      ))}
    </main>
  );
}
