import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://api.cloudinary.com/v1_1/dlraeenlx/auto/upload";
  const upload_preset = "lwffo1cw";
  const handleProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const video = form.video.files[0];
    const formData = new FormData();
    // fetch data
    formData.append("file", video);
    formData.append("upload_preset", upload_preset);
    // send to the sever
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data.secure_url);
        const product = {
          title,
          video: res.data.secure_url,
          description,
        };
        // send to db
        axios
          .post("/product", product)
          .then((res) => {
            if (res.data.acknowledged) {
              toast.success("product added successfully");
              setIsLoading(false);
              form.reset();
            }
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });

    // console.log(product)
  };
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
          <form action="" onSubmit={handleProduct} className="space-y-5">
            <p className="text-base font-medium mb-5 text-red-600">{error}</p>
            <div>
              <label className="text-sm text-gray-600">
                Title
                <input
                  type="text"
                  name="title"
                  placeholder="Drone"
                  required
                  className="border border-slate-400 rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </label>
            </div>
            <div className="mt-6 w-full">
              <input
                className="px-4 py-3 text-gray-800 border rounded"
                type="file"
                // multiple={true}
                name="video"
                accept="video/*"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                name="description"
                required
                className="block border border-slate-400 rounded focus:green-300 w-full h-20 px-4 py-3 text-gray-800 focus:outline-red-500 "
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                type="submit"
              >
                {isLoading ? "loading..." : "Add product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
