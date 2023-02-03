import React from 'react';
import logo3 from '../assets/images/EJS.BRAND_WHITE-18.png';
import logo4 from '../assets/images/EJSTEMPLATE-08.png';

const Footer = () => (
  <div id="footer" className="mt-12 container-fluid pt-10 sm:pt-16 md:pt-28 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 bg-ejs">
    <div className="socialLinks flex flex-col justify-center items-center space-y-12">
      <ul className="w-full flex flex-col space-y-4 sm:space-y-0 px-6 sm:px-0 sm:flex-row sm:space-x-2 lg:space-x-4 justify-between sm:items-center sm:justify-center sm:border-b border-ejs-gray sm:pb-8">
        <span className="w-full sm:w-auto flex justify-between items-center sm:space-x-2 lg:space-x-4 text-ejs-secondary font-thin">
          <li className="w-24 sm:w-auto">
            <a href="https://www.facebook.com/ejsbrand" target="_blank" rel="noreferrer">FACEBOOK</a>
          </li>
          <span className="w-2 h-5 sm:h-4 border-r border-ejs-white sm:border-ejs-secondary" />
          <li className="w-24 sm:w-auto">
            <a href="https://www.instagram.com/ejsbrand" target="_blank" rel="noreferrer">INSTAGRAM</a>
          </li>
        </span>
        <span className="w-2 h-5 sm:h-4 hidden sm:block border-r border-ejs-white sm:border-ejs-secondary" />
        <span className="w-full sm:w-auto flex justify-between items-center sm:space-x-2 text-ejs-secondary font-thin">
          <li className="w-24 sm:w-auto">
            <a href="https://www.linkedin.com/company/ejsbrand" target="_blank" rel="noreferrer">LINKEDIN</a>
          </li>
          <span className="w-2 h-5 sm:h-4 border-r border-ejs-white sm:border-ejs-secondary" />
          <li className="w-24 sm:w-auto">
            <a href="https://www.twitter.com/company/ejsbrand" target="_blank" rel="noreferrer">TWITTER</a>
          </li>
        </span>
        <span className="w-2 h-5 sm:h-4 hidden sm:block border-r border-ejs-white sm:border-ejs-secondary" />
        <span className="w-full sm:w-auto flex justify-between sm:space-x-2 items-center text-ejs-secondary font-thin">
          <li className="w-24 sm:w-auto">
            <a href="https://www.youtube.com/channel/UCZ1Z2Z3Z4Z5Z6Z7Z8Z9Z10" target="_blank" rel="noreferrer">YOUTUBE</a>
          </li>
          <span className="w-2 h-5 sm:h-4 border-r border-ejs-white sm:border-ejs-secondary" />
          <li className="w-24 sm:w-auto">
            <a href="https://www.pinterest.com/ejsbrand" target="_blank" rel="noreferrer">PINTEREST</a>
          </li>
        </span>
      </ul>
      <div className="flex flex-col px-6 sm:px-2 lg:px-16 space-y-10 sm:space-y-0 sm:flex-row justify-start sm:justify-between items-start w-full">
        <div className="flex flex-col space-y-4">
          <img src={logo3} alt="Logo" className="sm:hidden w-40" />
          <img src={logo4} alt="Logo" className="hidden sm:block sm:w-60 lg:w-96" />
          <span className="sm:hidden w-12 border-b border-ejs-white" />
        </div>
        <span className="flex flex-col font-montserrat sm:pb-8">
          <span className="text-ejs-secondary font-thin mb-1 md:text-xl lg:text-2xl">GET IN TOUCH</span>
          <span className="text-ejs-white font-light lg:text-xl">Email: ejsbrand@gmail.com</span>
          <span className="text-ejs-white font-light lg:text-xl">Phone: +91 9876543210</span>
          <span className="text-ejs-white font-light lg:text-xl">Address: 123, ABC Street, XYZ City</span>
          <button type="button" className="w-32 bg-ejs-secondary hover:bg-ejs-hover text-ejs-white font-nayanika font-normal py-2 px-4 mt-4 lg:text-xl">
            Hire Us
          </button>
        </span>
      </div>
      <span className="w-full text-ejs-gray font-thin font-montserrat text-xs sm:text-md lg:text-lg 2xl:text-xl text-center border-t border-ejs-gray pt-2 sm:pt-4 pb-8">
        &copy; Copyright 2023 ejs.brand - All Rights Reserved.
      </span>
    </div>
  </div>
);

export default Footer;
