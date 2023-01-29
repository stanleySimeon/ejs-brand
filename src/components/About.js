import React from 'react';

const About = () => (
  <div className="about container-fluid px-2 pt-8 md:px-16 lg:px-32">
    <div className="flex flex-col">
      <div className="flex flex-col space-y-20">
        <div className="w-full flex flex-col space-y-2">
          <div className="flex items-center text-ejs pl-8 space-x-8 text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika">
            <span className="w-3 h-3 bg-ejs" />
            <h2 className="">Who we are</h2>
          </div>
          <span className="w-full border-b border-ejs" />
        </div>
        <div className="w-8/12 pl-8 flex space-x-8 items-center justify-start">
          <button type="button" id="btn story" className="px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs rounded-sm">
            Our story
          </button>
          <button type="button" id="btn mission" className="px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs rounded-sm">
            Our mission
          </button>
          <button type="button" id="btn vision" className="px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs rounded-sm">
            Our vision
          </button>
        </div>
      </div>
      <div className="w-8/12 text-ejs-black mt-8 mb-28">
        <p className="text-2xl font-light letter-spacing-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibhLorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy .
        </p>
      </div>
      <div className="w-full h-16 bg-ejs-secondary bg-opacity-25" />
      <div className="w-full h-auto">
        <div className="w-full flex flex-col space-y-2">
          <div className="flex items-center text-ejs pl-8 space-x-8 text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika">
            <span className="w-3 h-3 bg-ejs" />
            <h2 className="">Meet our experts Team</h2>
          </div>
          <span className="w-full border-b border-ejs" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
