import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import ProductCard from "./ProductCard";
import img from '../../assets/banner.jpg'

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
      <>
            <section className='relative min-h-[300px] pt-10 lg:py-32  flex items-center justify-start bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${img})`}}>
            <div className='w-full h-full top-0 absolute bg-black opacity-70' />
             <div className="px-6 md:px-16 lg:px-0 w-full max-w-2xl xl:pl-16 xl:mb-0 xl:w-3/4 z-10 mx-auto ">
                <h2 className="max-w-2xl text-center mb-4 md:mb-6 text-5xl leading-tight font-Bellefair tracking-wide text-white md:text-6xl md:leading-tight uppercase">
                    Shop
                </h2>
            </div>
        </section>
        <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
      <div className="grid mb-8 lg:grid-cols-3 gap-8">
        {
          isLoading ? <CardSkeleton card={3} /> : products.map(product=><ProductCard key={product._id} product={product} />)
        }
        
      </div>
    </div>
      </>
            
      
    
  );
};

export default Products;
