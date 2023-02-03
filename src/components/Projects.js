/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import './carousel/projectCarousel.css';
import { ProjectsData } from '../Data';

function Projects() {
  const [index, setIndex] = React.useState(0);
  const [category, setCategory] = React.useState('Branding');

  const handleCategoryChange = (e) => {
    setIndex(e.target.value);
    setCategory(e.target.innerText);
  };

  useEffect(() => {
    setCategory(Object.keys(ProjectsData)[index]);
  }, [index]);

  return (
    <div id="projects" className="projects container-fluid pt-10 sm:pt-16 md:pt-28 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
      <div className="flex flex-col space-y-8 md:space-y-10">
        <div className="flex flex-col space-y-8">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
            <h2 className="">Projects</h2>
          </div>
          <p className="text-ejs-black text-normal text-md lg:text-md font-montserrat font-normal">
            This is a collection of our work.
            We have worked with a variety of clients from all over the world.
          </p>
          <div className="w-full md:w-8/12 px-0 flex items-center text-xs md:text-normal xl:text-lg justify-start space-x-2 sm:space-x-4 md:space-x-8">
            {Object.keys(ProjectsData).map((category, i) => (
              <button
                key={category}
                type="button"
                className="btn px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs-secondary hover:bg-ejs-hover"
                onClick={handleCategoryChange}
                value={i}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className="w-full h-full flex mt-8 lg:mt-12 z-10"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 639,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {
            ProjectsData[category].map((project) => (
              <div key={project.id} className="items flex flex-col space-y-6 sm:px-3 md:px-4">
                <img src={project.Image} alt={project.name} className="w-full h-52 sm:h-56 md:h-72 lg:h-92 object-cover" />
                <div className="flex flex-col space-y-2">
                  <div className="font-montserrat flex justify-start items-center space-x-2">
                    <span className="w-8 h-1 border-b border-ejs" />
                    <h2 className="text-ejs text-lg font-thin">{project.name}</h2>
                  </div>
                  <p className="text-ejs-black text-normal sm:text-md font-montserrat font-light">{project.description}</p>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
