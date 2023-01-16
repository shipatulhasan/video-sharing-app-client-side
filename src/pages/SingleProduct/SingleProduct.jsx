import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {AuthContext} from '../../AuthProvider/AuthProvider'
import ProductSidebar from './ProductSidebar';
import ProductSkeleton from './ProductSkeleton';

const SingleProduct = () => {
    const [product,setProduct] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [comments,setComments] = useState([])
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`/product/${id}`)
        .then(res=>{
            setProduct(res.data)
            setIsLoading(false)
        })
        .catch(err=>{
            setIsLoading(false)
            console.error(err)
        })
    },[])

    useEffect(()=>{

    },[])

// handle comment submission
    const handleComment = (event)=>{
        event.preventDefault()
        const text = event.target.comment.value
        const comment = {
            user:user.email,
            comment:text,
            productId:id
        }
        axios.post('/comment',comment)
        .then(res=>{ 
            console.log(res.data)
            event.target.reset()
        })
        .catch(error=>console.error(error.response))
    }



    return (
        <div className='grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-y-0 md:gap-4 py-20'>
        <div className="col-span-3">

       {
           isLoading ?<ProductSkeleton /> :<ProductDetails handleComment={handleComment} product={product} />
       }
       
        </div>

        <ProductSidebar />
      </div>
    );
};

export default SingleProduct;