import EmptyCart from "@/components/cart/EmptyCart";
import { createServerStore } from "../redux-toolkit/serverStore";
import { useCartServer } from "../hooks/useCartServer";

export async function getCartLengthCheck() {
  const store = createServerStore();
  const { getProducts } = useCartServer(store);
  const products = getProducts();

  if (products.length > 0) {
    return null; // Return null to indicate that the children should be rendered
  } else {
    return <EmptyCart />;
  }
}
