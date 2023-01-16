import { createBrowserRouter } from "react-router-dom";
import ProductForm from "../compoent/ProductForm";
import Products from "../pages/Products/Products";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },

  {
    path: "/add-product",
    element: <ProductForm />,
  },
]);
