import React from 'react';
import { FaStar } from 'react-icons/fa';

const Comments = ({review,index}) => {
    const {user,comment,date} = review
    return (
        <div className={`${index ? 'border-none' : 'border-b'} border-slate-400 py-5 md:mx-5 dark:text-white`}>
        

        <div className='flex justify-between items-center'>
        <div className="flex">
          <div
            className="w-12 h-12 mr-4 rounded-full shadow bg-red-500 grid place-content-center font-bold text-2xl text-white uppercase ">
                {user?.split('')[0]}
              </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold">{user}</p>
            <p className="text-sm text-black">{date}</p>
          </div>
        </div>
        <div>
        </div>
     
        </div>

        <div className='px-4 pt-5'>
        <p className="text-sm tracking-wide text-black">
              {comment}
            </p>
            <p className='py-3 flex text-red-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
        </div>
      </div>
    );
};

export default Comments;