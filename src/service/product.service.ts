/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IProduct, PRODUCTS } from "../mock/products";

// export const getProducts = async (): Promise<IProduct[]> => {
//   return PRODUCTS;
// };

export const getProducts = (): IProduct[] => {
  return PRODUCTS;
};

export const getProduct = (id: number): IProduct | undefined => {
  return PRODUCTS.find((product) => product.id === id);
};
