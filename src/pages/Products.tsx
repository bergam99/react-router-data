import { Link, useLoaderData } from "react-router-dom";
import { IProduct } from "../mock/products";
import { getProducts } from "../service/product.service";

export const productsLoader = (): IProduct[] => {
  const products = getProducts();
  return products;
};

// associer cette funcrtion à AppRouter

const Products = () => {
  const products = useLoaderData() as IProduct[];
  return (
    <div>
      <h1>Tous mes produits</h1>
      <ul>
        {products.map((product: IProduct) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            {product.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Products;
