import React from 'react';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ServicesData, TestimonialsData, Clients } from '../Data';

function Services() {
  const count = 5;

  return (
    <div id="services" className="services container-fluid pt-10 sm:pt-16 md:pt-28 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
      <div className="flex flex-col space-y-8 md:space-y-10">
        <div className="flex flex-col space-y-8">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
            <h2 className="">Services</h2>
          </div>
          <p className="text-ejs-black text-normal text-md lg:text-md font-montserrat font-normal">
            This is a collection of our services. Whatever you need, we can help.
            We hope you find them useful.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service) => (
            <div key={service.id} className="items flex flex-col space-y-4">
              <h2 className="itemTitle text-ejs text-xl font-montserrat font-medium">{service.title}</h2>
              <span className="flex flex-col justify-start space-y-1">
                {
                  service.Items.map((i) => (
                    <p key={i.id} className="text-ejs-black text-md font-montserrat font-light">{i.name}</p>
                  ))
                }
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-10 md:space-y-12 sm:pt-12 md:pt-20">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-ejs" />
            <h2 className="">People who believes in us</h2>
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
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {
              TestimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="flex flex-col space-y-4 sm:px-2 md:px-4">
                  <img src={testimonial.Image} alt={testimonial.name} className="w-full h-44 sm:h-48 md:h-52 lg:h-64 object-cover" />
                  <div className="flex flex-col space-y-2">
                    <p className="text-ejs-black text-md font-montserrat font-light">{testimonial.description}</p>
                    <p className="text-ejs text-sm font-montserrat font-thin">
                      {testimonial.name}
                      {' '}
                      |
                      {' '}
                      {testimonial.designation}
                    </p>
                    <div className="flex flex-row space-x-1" key={testimonial.id}>
                      {
                        Array.from({ length: count }).map((i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="text-ejs-primary" />
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
      {/* space-y-8 */}
      <div className="w-full h-auto bg-ejs-primary px-2 md:px-4 py-3 flex flex-col sm:space-y-0 mt-8">
        <div className="hidden w-full items-center text-ejs-white space-x-1 sm:space-x-3 md:space-x-4 text-md sm:text-lg md:text-xl lg:text-2xl font-bold font-nayanika">
          <span className="w-1 h-1 md:w-2 md:h-2 bg-ejs-white" />
          <h2 className="">Clients & Partnerships</h2>
        </div>
        {/* grid grid-cols-5 gap-3 py-4 sm: */}
        <div className="flex justify-center items-center md:py-8 lg:py-12 space-x-6 md:space-x-8">
          {
            Clients.map((client) => (
              <img key={client.id} src={client.Logo} alt={client.name} className="w-8 sm:w-12 md:w-16 object-contain" />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Services;
