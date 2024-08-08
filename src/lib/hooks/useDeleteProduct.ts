export const useDeleteProduct = (mutate: () => void) => {
  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );

      if (confirmed) {
        const res = await fetch(`/api/products/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          mutate();
        } else {
          throw new Error("Failed to delete product");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return handleDelete;
};
