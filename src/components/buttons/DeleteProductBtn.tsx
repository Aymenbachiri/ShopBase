"use client";

import { useDeleteProduct } from "@/lib/hooks/useDeleteProduct";
import DeleteIcon from "@/lib/svg/DeleteIcon";
import type { DeleteProductProps } from "@/lib/types/types";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";

export default function DeleteProductBtn({ id }: DeleteProductProps) {
  const { mutate } = useSWRConfig();
  const { data: session } = useSession();
  const handleDelete = useDeleteProduct();

  const onDelete = async () => {
    await handleDelete(id);
    mutate(`/api/dashboardProducts?creator=${session?.user?.name}`);
  };

  return (
    <button
      onClick={onDelete}
      className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-full"
    >
      <DeleteIcon />
    </button>
  );
}
