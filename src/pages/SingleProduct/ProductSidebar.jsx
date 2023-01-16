import React from 'react';
import { Link } from 'react-router-dom';

const ProductSidebar = ({products}) => {
    return (
        <div className="mx-auto w-11/12 md:w-64 ">
        <h2 className='text-black font-Bellefair font-normal text-3xl pb-3'>
            Other Products
        </h2>

        {
            products.map(product=> <Link to={`/product/${product._id}`} key={product._id} className='flex items-center gap-5 py-3 border-b border-b-slate-300'>
            {/* <img src={blog.img} className='w-20 h-16' alt="" /> */}
            <video src={product.video} className='w-20 h-16'></video>
            <div>
            {/* <p className="text-sm font-Bellefair mb-2">{blog.category}</p> */}
              <h5 className=" font-Bellefair font-normal leading-tight ">
                {product.title}
              </h5>
            </div>
          </Link>)
        }
        
    </div>
    );
};

export default ProductSidebar;