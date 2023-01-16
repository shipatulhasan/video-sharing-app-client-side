import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
    return (
        <div className="px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="flex flex-col max-w-screen-lg overflow-hidden ">
         
        <div className="lg:pl-10 space-y-5 ">
        <div className="w-full h-56 mb-6 md:h-96">
           <Skeleton style={{height:'100%'}} />
       </div>
          <div>
            <div className="relative z-10">
              <Skeleton count={0.5} />
              <Skeleton style={{marginTop:'5px'}} />
             
       
            </div>
            <div className='flex items-center justify-between mt-3'>
           <Skeleton width={100} />
           <Skeleton width={100} />
       </div>
           <Skeleton />
            
          </div>
          <div className="flex items-center gap-4 pt-2">
           <Skeleton circle width={40} height={40} />
           <Skeleton circle width={40} height={40} />
           <Skeleton circle width={40} height={40} />
       
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductSkeleton;