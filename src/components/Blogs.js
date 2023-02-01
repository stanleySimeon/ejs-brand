/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-multi-carousel';
import { BlogsData } from '../Data';

const Blogs = () => (
  <div id="blogs" className="blogs container-fluid pt-10 sm:pt-16 md:pt-28 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
    <div className="flex flex-col space-y-8 md:space-y-10">
      <div className="flex flex-col space-y-8">
        <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
          <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
          <h2 className="">Blogs</h2>
        </div>
        <p className="text-ejs-black text-normal text-md lg:text-md font-montserrat font-normal">
          This is a collection of our blogs. We write about our experiences and
          share our knowledge with the world. We hope you find them useful.
        </p>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
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
        {
          BlogsData.map((blog) => (
            <div key={blog.id} className="items flex flex-col space-y-6 sm:px-3 md:px-4">
              <img src={blog.Image} alt={blog.title} className="w-full h-52 sm:h-56 md:h-72 lg:h-92 object-cover" />
              <div className="flex flex-col space-y-4">
                <div className="font-montserrat flex flex-col justify-start pl-2 sm:pl-0">
                  <h2 className="text-ejs-black text-lg font-thin">{blog.date}</h2>
                  <h2 className="text-ejs text-lg font-thin">{blog.title}</h2>
                </div>
                <p className="text-ejs-black text-normal sm:text-md font-montserrat font-light">{blog.description}</p>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  </div>
);

export default Blogs;
