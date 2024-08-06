import { Store } from "@reduxjs/toolkit";
import type { ProductCartProps } from "../types/cartTypes";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux-toolkit/shopBaseSlice";
import { ServerRootState } from "../redux-toolkit/serverStore";

export const useCartServer = (store: Store) => {
  const getProducts = (): ProductCartProps[] => {
    return (store.getState() as ServerRootState).shop.products;
  };

  const getTotalPrice = (): number => {
    const products = getProducts();
    return products.reduce((acc, product) => {
      acc += product.price * product.quantity!;
      return acc;
    }, 0);
  };

  const handleResetCart = () => {
    store.dispatch(clearCart());
  };

  const handleAddToCart = (product: ProductCartProps) => {
    store.dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleDecreaseQuantity = (id: string) => {
    store.dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    store.dispatch(increaseQuantity(id));
  };

  const handleRemoveFromCart = (id: string) => {
    store.dispatch(removeFromCart(id));
  };

  return {
    getCart: getProducts,
    getLength: () => getProducts().length,
    getProducts,
    getTotalPrice,
    handleAddToCart,
    handleResetCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
  };
};
