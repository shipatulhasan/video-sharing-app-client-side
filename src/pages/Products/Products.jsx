import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products,setProducts] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    axios.get('/product')
    .then(res=>{
      setIsLoading(false)
      console.log(res.data)
      setProducts(res.data)
    })
    .catch(err=>console.error(err.response))
  },[])

  return (
    <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
      <div className="grid mb-8 lg:grid-cols-3 gap-8">
        {
          isLoading ? <CardSkeleton card={3} /> : products.map(product=><ProductCard key={product._id} product={product} />)
        }
        
      </div>
    </div>
  );
};

export default Products;
