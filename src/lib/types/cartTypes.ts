export type BaseProductProps = {
  _id: string;
  id: string;
  title: string;
  description: string;
  category: string;
  imageurl: string;
  price: number;
  creator: string;
};

export type ProductCartProps = BaseProductProps & {
  rating?: number;
  quantity?: number;
};

export type CartStateTypes = {
  products: ProductCartProps[];
};

export type CartItemType = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageurl: string;
  price: number;
  rating: number;
  creator: string;
  quantity: number;
};

export type CartItemProps = {
  product: ProductCartProps;
  onDecrease: (id: string) => void;
  onIncrease: (id: string) => void;
  onRemove: (id: string) => void;
};

export type DecreaseQuantityBtnProps = {
  onDecrease: (id: string) => void;
  product: ProductCartProps;
};

export type IncreaseQuantityBtnProps = {
  onIncrease: (id: string) => void;
  product: ProductCartProps;
};

export type RemoveFromCartBtnProps = {
  onRemove: (id: string) => void;
  product: ProductCartProps;
};
