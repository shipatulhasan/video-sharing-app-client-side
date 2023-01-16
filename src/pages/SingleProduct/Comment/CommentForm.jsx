import React from 'react';

const CommentForm = ({handleComment,isLoading}) => {
    return (
        <form onSubmit={handleComment}>
        <div className='border border-slate-300'>
        <textarea className='p-5 w-full focus:outline-none' name="comment" rows='5' placeholder='Write your comment....' ></textarea>
        </div>
       <div className='flex justify-end'>
          
       <button className='border-2 border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs mt-6 bg-red-500  hover:bg-khaki '>
       {
               isLoading ? 'processing...' : 'Comment'
           } 
        </button>
       </div>
       
    </form>
    );
};

export default CommentForm;