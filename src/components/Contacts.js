import React from 'react';
import logo1 from '../assets/images/EJSTEMPLATE-09.png';
import logo2 from '../assets/images/EJSTEMPLATE-07.png';

const Contacts = () => (
  <div id="contacts" className="contacts container-fluid pt-10 sm:pt-16 md:pt-28 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
    <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
      <h2 className="">
        Let’s begin your
        {' '}
        <span>Branding Journey!</span>
      </h2>
    </div>
    <div className="ContactForm w-full flex flex-col sm:flex-row justify-between sm:space-x-4 pt-16 space-y-8 sm:space-y-0">
      <div className="sm:w-5/12 flex flex-col space-y-4 sm:space-y-0 sm:flex-col-reverse">
        <span className="flex h-full flex-col space-y-2">
          <img src={logo1} alt="Logo" className="w-66 sm:hidden" />
          <img src={logo2} alt="Logo" className="hidden sm:flex sm:w-48 md:w-52 lg:w-56" />
        </span>
        <span className="flex flex-col font-montserrat sm:pb-8">
          <span className="text-ejs-primary font-thin mb-1 md:text-xl lg:text-2xl">GET IN TOUCH</span>
          <span className="text-ejs font-light lg:text-xl">Email: ejsbrand@gmail.com</span>
          <span className="text-ejs font-light lg:text-xl">Phone: +91 9876543210</span>
          <span className="text-ejs font-light lg:text-xl">Address: 123, ABC Street, XYZ City</span>
        </span>
      </div>
      <form action="https://formspree.io/f/mbjedqeb" method="post" className="sm:w-7/12 px-0 flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 font-light">
          <input type="text" id="name" name="name" placeholder="Full Name" className="border-none bg-ejs-grayLight px-4 py-2 outline-none focus-none" />
          <input type="email" id="email" name="email" placeholder="Email" className="border-none bg-ejs-grayLight px-4 py-2 outline-none" />
          <input type="text" id="project" name="project" placeholder="Subject" className="border-none bg-ejs-grayLight px-4 py-2 outline-none" />
          <textarea id="message" name="message" placeholder="Message..." className="border-none bg-ejs-grayLight px-4 py-2 outline-none" rows={5} />
        </div>
        <span className="flex justify-end">
          <button type="submit" className="w-full bg-ejs-primary font-nayanika text-white px-4 py-2.5 whitespace-nowrap sendMessage">Send Message</button>
        </span>
      </form>
    </div>
  </div>
);

export default Contacts;
