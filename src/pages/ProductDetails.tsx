import { Fragment } from "react";
import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { getProduct } from "../service/product.service";
import { IProduct } from "../mock/products";
import BackButton from "../components/BackButton/BackButton";

export const productLoader = (args: ActionFunctionArgs) => {
  // console.log(args);
  const { params } = args;
  const { id } = params;
  //   number to string (url)
  const productId = Number(id);
  const product = getProduct(productId);
  //   si pas de produit, retourne error, sinon return product.
  if (!product) {
    throw new Response("", {
      status: 404,
      statusText: "ce produit n'existe plus.",
    });
  }
  return product;
};

const ProductDetails = () => {
  const product = useLoaderData() as IProduct;
  return (
    <Fragment>
      <BackButton />
      <h2>
        {product.title} - {product.price} euros
      </h2>
    </Fragment>
  );
};

export default ProductDetails;
