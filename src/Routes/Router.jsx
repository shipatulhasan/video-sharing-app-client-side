import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ProductForm from "../pages/AddProduct/ProductForm";
import Login from "../pages/Forms/Login";
import Signup from "../pages/Forms/Signup";
import Products from "../pages/Products/Products";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Main /></PrivateRoute>,
    children:[
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/shop",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    
      {
        path: "/add-product",
        element: <ProductForm />,
      }
    ]
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
