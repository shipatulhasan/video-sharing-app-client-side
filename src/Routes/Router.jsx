import { createBrowserRouter } from "react-router-dom";
import ProductForm from "../compoent/ProductForm";
import Products from "../pages/Products/Products";
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
    element: <Products />,
  },

  {
    path: "/add-product",
    element: <ProductForm />,
  },
]);
