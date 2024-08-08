"use client";

import { useDeleteProduct } from "@/lib/hooks/useDeleteProduct";
import { useFetchDashboardProducts } from "@/lib/hooks/useFetchDashboardProducts";
import DeleteIcon from "@/lib/svg/DeleteIcon";
import type { DeleteProductProps } from "@/lib/types/types";
import { useSession } from "next-auth/react";

export default function DeleteProduct({ id }: DeleteProductProps) {
  const session = useSession();
  const { mutate } = useFetchDashboardProducts(session.data?.user.name);
  const handleDelete = useDeleteProduct(mutate);

  return (
    <button
      onClick={() => handleDelete(id)}
      className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-full"
    >
      <DeleteIcon />
    </button>
  );
}
