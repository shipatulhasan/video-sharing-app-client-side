import React from "react";
import { Link } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

const ProductCard = () => {
  return (
    <div className="dark:bg-slate-800 text-white bg-[#353535]">
      <div>
        <video
          className="object-cover w-full h-56 md:h-64 xl:h-72 -z-10"
          src="http://res.cloudinary.com/dlraeenlx/video/upload/v1673805362/product-video/sgpptd8rpd4j2cl2hdnd.mp4"
        ></video>
      </div>

      <div className="-mt-11 bg-[#353535] relative z-20 ml-5 flex items-center gap-2">
        <div className="bg-red-400 p-2">
          <p className="text-white text-lg">$20</p>
        </div>
        <p
          className=" text-base font-Bellefair font-normal leading-none sm:text-2xl dark:text-white"
          title="Lenevo"
        >
          My titile
        </p>
      </div>
      <div className="p-5">
        <p className="text-sm  dark:text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo
          illum, sint culpa ipsa beatae assumenda itaque laboriosam sed vero
          modi, blanditiis vitae in quis iure eaque minus. Ab, error.
        </p>
        <div className="flex items-center justify-between gap-3 mt-3">
          <p className="text-sm text-red-400 font-bold">
            10 Likes || 2 Comments
          </p>

          <div className="inline-block  ">
            <Link to={`/product/01`}>
              <p className="viewCard-button text-sm text-red-400 font-semibold uppercase">
                view more
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
