import EditProductPage from "@/pages/EditProductPage";

export default function page({ params }: { params: { productId: string } }) {
  return <EditProductPage params={params} />;
}
