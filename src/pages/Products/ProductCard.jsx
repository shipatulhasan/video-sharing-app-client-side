import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  const {_id,title,video,description} = product
  return (
    <div className=" dark:bg-slate-800 text-white bg-[#353535] h-full">
      <div>
        <video
          className="object-cover w-full h-56 md:h-64 xl:h-72 -z-10"
          src={video}
        ></video>
      </div>

      <div className="-mt-11 bg-[#353535] relative z-20 ml-5 flex items-center gap-3">
        <div className="bg-red-500 p-2">
          <p className="text-white text-lg">$20</p>
        </div>
        <p
          className=" text-base font-Bellefair font-normal leading-none sm:text-2xl dark:text-white"
          title={title}
        >
          {title}
        </p>
      </div>

      <div className=" p-5 flex flex-col justify-between min-h-[28vh] gap-3">
        <p className="text-sm  dark:text-slate-200">
          {
            description.length>190?description.slice(0,190)+'...':description
          }
        </p>
        <div className="flex items-center justify-between gap-3">
        <p className='flex text-red-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

          <div className="inline-block  ">
            <Link to={`/product/${_id}`}>
              <p className="viewCard-button text-xs bg-red-500 px-4 py-1 text-white  hover:text-red-500 hover:bg-slate-200">
                View Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
