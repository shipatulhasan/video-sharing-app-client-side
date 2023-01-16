import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {AuthContext} from '../../AuthProvider/AuthProvider'
import ProductSidebar from './ProductSidebar';
import ProductSkeleton from './ProductSkeleton';
import useProducts from '../../Hooks/useProducts';

const SingleProduct = () => {
    const [product,setProduct] = useState({})
    const {products} = useProducts()
    const [otherProducts,setOtherProducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)
   
   
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`/product/${id}`)
        .then(res=>{
            setProduct(res.data)
            if(res.data){
                const rest = products.filter(p=>p._id!==res.data._id)
                setOtherProducts(rest)
            }
            setIsLoading(false)
        })
        .catch(err=>{
            setIsLoading(false)
            console.error(err)
        })
    },[products,id])
    // console.log(otherProducts)

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-y-0 md:gap-4 py-10'>
        <div className="col-span-3">

       {
           isLoading ?<ProductSkeleton /> :<ProductDetails product={product}  />
       }
       
        </div>

        <ProductSidebar products={otherProducts} />
      </div>
    );
};

export default SingleProduct;