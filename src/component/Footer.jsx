import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="px-4 pt-16 bg-black sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 ">
        <div className='lg:max-w-screen-xl mx-auto'>

      <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-2 text-xl font-semibold text-gray-700 ">
              <Link
                className="text-2xl font-bold text-slate-200 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
                <h2>
                  Hat<span className="text-red-500">Bazar</span>
                </h2>
              </Link>
            </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-slate-200">Phone:</p>
            <a
              href="tel:01817051432"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-slate-200 hover:text-deep-purple-800"
            >
              01817051432
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-slate-200">Email:</p>
            <a
              href="mailto:shipatulhasan328@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-slate-200 hover:text-deep-purple-800"
            >
              shipatulhasan328@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-slate-200">Address:</p>
            <p
              
              className="transition-colors duration-300 text-slate-200 hover:text-deep-purple-800"
            >
              312 Omeca Street, NY
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
          </span>
          <div className="flex items-center gap-4 pt-2 text-white">
           <div className="h-7 w-7 rounded-full bg-red-500 grid place-content-center "><FaFacebookF /></div> 
           <div className="h-7 w-7 rounded-full bg-red-500 grid place-content-center "><FaTwitter /></div> 
           <div className="h-7 w-7 rounded-full bg-red-500 grid place-content-center "><FaLinkedinIn /></div> 
          </div>
          <p className="mt-4 text-xs text-slate-200">
          Haat Bazaar is the country's largest online product selling website. You can buy all the latest products from here at relatively low cost.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-slate-700 lg:flex-row">
        <p className="text-sm text-slate-200">
          © Copyright 2023 Hat Bazar. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              to="/faq"
              className="text-sm text-slate-200 transition-colors duration-300 hover:text-slate-200"
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-sm text-slate-200 transition-colors duration-300 hover:text-slate-200"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-sm text-slate-200 transition-colors duration-300 hover:text-slate-200"
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
        </div>
    </div>
    );
};

export default Footer;