import { useCartServer } from "@/lib/hooks/useCartServer";
import { createServerStore } from "@/lib/redux-toolkit/serverStore";
import CartItem from "./CartItem";

export default function CartProducts() {
  const store = createServerStore();
  const {
    getProducts,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
  } = useCartServer(store);

  const products = getProducts();

  return (
    <ul className="-my-8">
      {products.map((product) => (
        <CartItem
          key={product.id}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
          onRemove={handleRemoveFromCart}
          product={product}
        />
      ))}
    </ul>
  );
}
