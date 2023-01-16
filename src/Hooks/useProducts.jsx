import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        axios.get('/product')
        .then(res=>{
          setIsLoading(false)
          // console.log(res.data)
          setProducts(res.data)
        })
        .catch(err=>console.error(err.response))
      },[])
    return {products,isLoading}
};

export default useProducts;