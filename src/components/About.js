/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Data, { Team } from '../Data';

function About() {
  const [i, setI] = useState(0);

  return (
    <div className="about container-fluid pt-2 sm:pt-16 md:pt-16 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
      <div className="flex flex-col space-y-10 sm:space-y-16">
        <div className="flex flex-col space-y-4 md:space-y-10">
          <div className="flex flex-col space-y-8">
            <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
              <h2 className="">Who we are</h2>
            </div>
            <div className="w-full md:w-8/12 px-0 flex items-center text-sm md:text-normal xl:text-lg justify-start space-x-4 md:space-x-8">
              <button type="button" className="btn px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs-secondary hover:bg-ejs-hover" onClick={() => setI(0)}>
                Our story
              </button>
              <button type="button" className="btn px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs-secondary hover:bg-ejs-hover" onClick={() => setI(1)}>
                Our mission
              </button>
              <button type="button" className="btn px-2 sm:px-4 md:px-8 py-2 whitespace-nowrap text-ejs-white bg-ejs-secondary hover:bg-ejs-hover" onClick={() => setI(2)}>
                Our vision
              </button>
            </div>
          </div>
          <div id="carousel" className="w-full flex flex-col space-y-4 md:space-x-8 md:space-y-0 md:flex-row text-ejs-black">
            <span id="carousel-items" className="w-full md:w-7/12 text-md md:text-xl text-clip font-light letter-spacing-4">
              {Data[i].description}
            </span>
            <span id="carousel-image" className="imageContainer w-full md:w-5/12 h-48 md:h-60 bg-ejs-secondary">
              <img src={Data[i].Image} alt={Data[i].title} className="w-full h-full object-cover" />
            </span>
          </div>
        </div>
        <div className="w-full h-16 hidden md:flex bg-ejs-secondary bg-opacity-25" />
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
            <span className="whitespace-nowrap flex">
              Meet our
              {' '}
              <span className="hidden sm:flex px-2"> experts </span>
              Team
            </span>
          </div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
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
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {Team.map((team) => (
              <div key={team.id} className="items flex flex-col space-y-6 sm:px-3 md:px-4">
                <img src={team.Image} alt={team.name} className="w-full h-52 sm:h-56 md:h-72 lg:h-92 object-cover" />
                <div className="flex flex-col space-y-6">
                  <div className="font-nayanika flex flex-col space-y-2">
                    <h2 className="text-ejs text-md font-bold">{team.name}</h2>
                    <h3 className="text-ejs-secondary text-sm font-light">{team.position}</h3>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="w-12 h-1 border-b border-ejs" />
                    <p className="text-ejs-black text-normal sm:text-md font-montserrat font-light">{team.description}</p>
                    <span className="flex justify-start items-center space-x-2 px-0">
                      {
                        team.socialMedia.map((social) => (
                          <a href={social.link} key={social.id} className="text-ejs text-lg font-montserrat font-light" target="_blank" rel="noreferrer">{social.icon}</a>
                        ))
                      }
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;
