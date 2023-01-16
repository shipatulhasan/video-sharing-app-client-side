import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  
    const { signInUser, isLoading } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
    const handleSubmit = (e) => {
      e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
          .then((result) => {
            console.log(result)
            toast.success('successfully loggedin')
            setError('')
            navigate(from, { replace: true });
            
          })
          .catch((err) => {
            const firebaseError = err.message;
            const errorMsg = firebaseError.split("/")[1].replace(/[-())/]+/g, " ");
            setError(errorMsg);
          });
      };
    return (
        <div className="h-full w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-[93vh]">
          <div className="bg-white border border-slate-400 shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-6">
          
              <div
                className="text-2xl font-bold text-black transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 pb-3"
                to="/"
              >
                <h2>
                  Hat<span className="text-red-500">Bazar</span>
                </h2>
              </div>
           
          <p className="text-2xl font-extrabold leading-6 text-gray-800 ">
            Sign In
          </p>
            <p className="text-red-600 font-semibold text-xl py-4">{error}</p>
            <form action="" onSubmit={handleSubmit} className="space-y-5">
           
              <div>
                <label className="text-sm text-gray-600">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="jhon@gmail.com"
                    required
                    className="border border-slate-400 rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  />
                </label>
              </div>
              <div className="space-y-1 text-base">
              <div className="relative flex items-center justify-center">
              <label className="text-sm text-gray-600 w-full">
                Password
                <input
                  type={isOpen ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border border-slate-400 rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 "
                />
                </label>
                <div
                  className="absolute right-0 mt-5 mr-3 cursor-pointer text-black text-sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>
              <div className="mt-6">
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                  type="submit"
                >
                  {isLoading ? "loading..." : "Login"}
                </button>
              </div>
            </form>
  
            <p className="text-sm font-bold text-center sm:px-6 text-black pt-3">
                Do not have an account ?
                <Link
                  rel="noopener noreferrer"
                  to="/signup"
                  className=" text-red-500 hover:underline "
                >
                  {" "}
                  Sign up
                </Link>
              </p>
          </div>
        </div>
      </div>
    );
};

export default Login;