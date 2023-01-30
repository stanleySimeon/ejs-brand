import React from 'react';

const About = () => (
  <div className="about container-fluid pt-2 sm:pt-16 md:pt-16 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
    <div className="flex flex-col space-y-10 sm:space-y-16">
      <div className="flex flex-col space-y-4 md:space-y-10">
        <div className="flex flex-col space-y-8">
          <div className="w-full flex items-center text-ejs md:pl-8 space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-nayanika pb-2 border-b border-ejs">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
            <h2 className="">Who we are</h2>
          </div>
          <div className="w-full md:w-8/12 pl-0 md:pl-8 px-0 flex items-center text-sm md:text-normal xl:text-xl 2xl:text-2xl justify-start space-x-4 md:space-x-8">
            <button type="button" id="btn story" className="px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs">
              Our story
            </button>
            <button type="button" id="btn mission" className="px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs">
              Our mission
            </button>
            <button type="button" id="btn vision" className="px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs">
              Our vision
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-4 md:space-x-8 md:space-y-0 md:flex-row text-ejs-black">
          <span className="w-full md:w-7/12 text-lg md:text-2xl text-clip font-light letter-spacing-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibhLorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy .
          </span>
          <span className="imageContainer w-full md:w-5/12 h-40 md:h-auto bg-ejs-secondary" />
        </div>
      </div>
      <div className="w-full h-16 hidden md:flex bg-ejs-secondary bg-opacity-25" />
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center text-ejs md:pl-8 space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-nayanika pb-2 border-b border-ejs">
          <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
          <span className="whitespace-nowrap flex">
            Meet our
            {' '}
            <span className="hidden sm:flex px-2"> experts </span>
            Team
          </span>
        </div>
        <div id="carrousel" className="h-48">
          {/*  */}
        </div>
      </div>
    </div>
  </div>
);

export default About;
