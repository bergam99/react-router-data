import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products, { productsLoader } from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import ProductDetails, { productLoader } from "../pages/ProductDetails";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
          loader: productLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
