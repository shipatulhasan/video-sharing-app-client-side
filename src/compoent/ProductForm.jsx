import React, { useState } from 'react';

const ProductForm = () => {
    const [error, setError] = useState("");
    const url = 'https://api.cloudinary.com/v1_1/dlraeenlx/auto/upload'
    const upload_preset = 'lwffo1cw'
    const handleProduct = (e)=>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const video = form.video.files[0]
        const formData = new FormData()
        formData.append('file',video)
        formData.append('upload_preset',upload_preset)
        fetch(url,{
            method:'post',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.secure_url)
        })
        .catch(err=>console.error(err.message))

        

        const product ={
            title,video
        }
        console.log(product)
    }
    return (
        <div className="h-full w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="bg-white border border-slate-400 shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-6">
            <p
               
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Upload product
            </p>
            <form action="" onSubmit={handleProduct}>
              <p className="text-base font-medium mb-5 text-red-600">{error}</p>
              <div>
                <label className="text-base font-medium leading-none text-gray-800">
                  Product Name
                  <input
                  
                    type="text"
                    name="title"
                    placeholder="lenovo"
                    className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  />
                </label>
              </div>
              <div className="mt-6  w-full">
              <input
            className="px-4 py-3 text-gray-800 border rounded"
            type="file"
            // multiple={true}
            name="video"
          />
                
              </div>
              <div className="mt-6">
                <button
                 
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                  type="submit"
                >
                 Add product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ProductForm;