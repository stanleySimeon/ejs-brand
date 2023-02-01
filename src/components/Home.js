import React from 'react';

const Home = () => (
  <div id="home" className="container-fluid px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
    <div className="w-612 flex flex-col items-start justify-center h-screen">
      <div className="flex flex-col space-y-2 sm:space-y-4 md:space-y-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        <h1 className="font-nayanika font-normal text-ejs-secondary">We are a</h1>
        <span className="flex flex-col space-y-1 md:space-y-4 font-nayanika font-extrabold text-ejs">
          <h1>Branding &</h1>
          <h1>Marketing Agency</h1>
        </span>
      </div>
      <button type="button" className="bg-ejs-secondary text-ejs-white font-normal font-montserrat text-sm md:text-md lg:text-lg text-center py-2 px-8 lg:px-12 mt-4">
        HIRE US
      </button>
    </div>
  </div>
);

export default Home;
