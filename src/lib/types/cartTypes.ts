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
