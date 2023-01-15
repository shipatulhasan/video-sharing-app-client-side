import { createBrowserRouter } from "react-router-dom";
import ProductForm from "../compoent/ProductForm";
export const router = createBrowserRouter([
   
    {
        path:'/add-product',
        element:<ProductForm />
    },
])