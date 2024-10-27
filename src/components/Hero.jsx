import React, { useState, useEffect } from 'react';
import {
  showcase1, showcase2, showcase3, showcase4, showcase5, showcase6, about,
  hero1, hero2, hero3, certificate1, certificate2, certificate3, certificate4
} from '../assets';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className=" min-h-screen flex flex-col">
      {/* Hero Section with Slideshow */}
      <div className="relative w-full h-[calc(100vh-4rem)]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img src={image} alt={`Hero ${index + 1}`} className="w-full h-full object-cover object-center" />
          </div>
        ))}
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center space-y-4">
          <p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 max-w-3xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0s' }}
          >
            You take care of the colors of life,
          </p>
          <p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 max-w-3xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            we will take care of the house!
          </p>
        </div>
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* About Us Section */}
      <div className="flex justify-center items-center flex-grow py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8">
          <div className="relative">
            <img src={about} alt="" className="w-96 h-100 rounded-full" />
            <div className="absolute inset-0 flex justify-center items-center">
            </div>
          </div>
          <div className="max-w-lg">
            <h2 className="text-[#2a2452] font-bold text-sm uppercase mb-2">Something About Us</h2>
            <h1 className="text-[#2a2452] text-5xl font-bold mb-4">About Us</h1>
            <p className="italic text-[#2a2452] font-semibold mb-4">Welcome to Artistic Paints Stripes, your trusted partner for all types of painting services. With years of experience in the industry, we pride ourselves on delivering top-notch painting solutions tailored to meet your unique needs. Whether it’s a fresh coat of paint for your home, a complete makeover for your office, or specialized finishes for commercial spaces, we’ve got you covered. Our services include interior and exterior painting, commercial painting, specialty finishes, and wallpaper installation and removal. We ensure a seamless and beautiful finish, enhancing the aesthetic appeal of your spaces.</p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gradient-to-b from-blue-200 to-blue-300 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-24 animate-fade-in-down">
            <p className="text-sm text-[#2a2452] font-semibold mb-4">PAINTING JOBS WE DO</p>
            <h1 className="text-7xl font-bold text-[#2a2452]">WHAT WE DO</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: 'paint-brush', title: 'SIGNAGE PAINTING', color: 'yellow', bgColor: 'bg-yellow-100' },
              { icon: 'ruler-combined', title: 'EXTERIORS', color: 'orange', bgColor: 'bg-orange-100' },
              { icon: 'palette', title: 'CUSTOM PAINTING', color: 'green', bgColor: 'bg-green-100' },
              { icon: 'paint-roller', title: 'INTERIORS', color: 'purple', bgColor: 'bg-purple-100' }
            ].map((service, index) => (
              <div key={index} className={`${service.bgColor} rounded-lg shadow-lg p-10 transform hover:scale-105 transition-all duration-300 animate-fade-in`}>
                <div className="flex justify-center mb-8">
                  <div className={`bg-${service.color}-400 rounded-full p-8`}>
                    <i className={`fas fa-${service.icon} text-white text-5xl`}></i>
                  </div>
                </div>
                <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">{service.title}</h2>
                <p className="text-center text-gray-700 text-lg">
                  {index === 0 && "Make your business stand out with our eye-catching signage painting services..."}
                  {index === 1 && "Transform your home's exterior with our high-quality, durable painting solutions..."}
                  {index === 2 && "Bring your vision to life with our custom painting services, including specialty finishes..."}
                  {index === 3 && "Revitalize your interior spaces with our expert painting services, tailored to your style..."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className=" text-center py-16">
        <h2 className="text-[#2a2452] font-bold text-sm uppercase mb-2 animate-fade-in">Projects That We Do</h2>
        <h1 className="text-[#2a2452] text-6xl font-bold animate-fade-in">Our Showcase</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-blue-100">
        {[showcase1, showcase2, showcase3, showcase4, showcase5, showcase6].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src={image}
              alt={`Showcase project ${index + 1}`}
              className="w-full h-[300px] object-cover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          </div>
        ))}
      </div>

 {/* Verification Details */}
<div className="text-center py-16">
    <h2 className="text-[#2a2452] text-6xl font-bold animate-fade-in">Certificates We Own</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16">
        <div className="flex flex-col items-center">
            <img src={certificate1} alt="Apollo Paints Certificate" className="w-80 h-60 object-cover rounded-lg" />
            <span className="text-[#2a2452] font-bold mt-2">Asian Paints</span>
        </div>
        <div className="flex flex-col items-center">
            <img src={certificate2} alt="Asian Paints Certificate" className="w-80 h-60 object-cover rounded-lg" />
            <span className="text-[#2a2452] font-bold mt-2">Asian Paints</span>
        </div>
        <div className="flex flex-col items-center">
            <img src={certificate3} alt="Dulux Certificate" className="w-80 h-60 object-cover rounded-lg" />
            <span className="text-[#2a2452] font-bold mt-2">Nerolac</span>
        </div>
        <div className="flex flex-col items-center">
            <img src={certificate4} alt="Berger Paints Certificate" className="w-80 h-60 object-cover rounded-lg" />
            <span className="text-[#2a2452] font-bold mt-2">Berger Paints</span>
        </div>
    </div>
</div>

    </div>
  );
};

export default Hero;
