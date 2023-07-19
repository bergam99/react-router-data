export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: "Salade",
    price: 2,
  },
  {
    id: 2,
    title: "Tomate",
    price: 4,
  },
  {
    id: 3,
    title: "Oignons",
    price: 3,
  },
];
