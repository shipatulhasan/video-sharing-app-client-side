import React from "react";
import { GoComment } from "react-icons/go";
import { BsHandThumbsUp } from "react-icons/bs"
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import CommentForm from "./Comment/CommentForm";

const ProductDetails = ({ product,handleSubmit }) => {
  const {_id,title,video,description} = product
  return (
    <div className="px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="flex flex-col max-w-screen-lg overflow-hidden ">
        <div className="bg-white lg:pl-10 space-y-5 ">
          <div className="min-h[400px] rounded ">
            <video src={video} controls />
          </div>
          <div>
            <div className="relative z-10">
              <h5 className=" font-Bellefair font-normal text-2xl leading-tight sm:text-4xl">
                {title}
              </h5>
      
            </div>
            <div className="py-3">
              <p className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <BsHandThumbsUp />
                  <sup>20</sup>
                </span>
                ||{" "}
                <span className="flex items-center gap-1">
                  <GoComment />
                  <sup>10</sup>
                </span>
              </p>
            </div>
            <p className="mb-5 text-gray-800">{description}</p>
          </div>
          <div className="flex items-center gap-4 pt-2">
           <div className="h-9 w-9 rounded-full bg-red-400 grid place-content-center "><FaFacebookF /></div> 
           <div className="h-9 w-9 rounded-full bg-red-400 grid place-content-center "><FaTwitter /></div> 
           <div className="h-9 w-9 rounded-full bg-red-400 grid place-content-center "><FaLinkedinIn /></div> 
          </div>
          {/* comment box */}

          <CommentForm handleSubmit={handleSubmit}/>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
