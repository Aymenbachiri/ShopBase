import CartUi from "@/components/cart/CartUi";
import CartLengthCheck from "@/lib/helpers/CartLengthCheck";

export default function CartPage() {
  return (
    <CartLengthCheck>
      <CartUi />
    </CartLengthCheck>
  );
}
