export type BaseProductProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageurl: string;
  price: number;
};

export type ProductCartProps = BaseProductProps & {
  rating: number;
  creator: string;
  quantity: number;
};

export type CartStateTypes = {
  products: ProductCartProps[];
};
