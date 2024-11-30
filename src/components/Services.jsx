import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const Services = () => {
  return (
    <div className="p-8">
      {/* Main Title Section */}
      <div className="relative mb-16">
        <img 
          src="https://placehold.co/1920x600" 
          alt="Open paint cans and color swatches on top of architectural plans" 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <h1 className="text-4xl font-bold">PAINTING SERVICES</h1>
          <p className="text-lg">WE WORK WITH ANY SURFACES, ANY COLORS AND ANY TASKS AT HAND!</p>
        </div>
      </div>

      {/* Services We Offer Section */}
      <div className="mb-16">
        <h1 className="text-7xl font-bold text-[#2a2452] text-center mb-8">WHAT WE DO</h1>
        <h2 className="text-5xl font-bold text-center mb-4">Services We Offer</h2>
        
        {/* Combined Painting Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Interior Painting Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Interior Painting</h3>
            <p className="text-gray-700 mb-4">
              Breathe new life into your home or office with our interior painting services. From bedrooms to living rooms, kitchens to hallways, our expert painters ensure every wall receives the highest level of attention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="https://placehold.co/600x400" alt="Interior Painting 1" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Interior Painting 2" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Interior Painting 3" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Interior Painting 4" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Interior Painting 5" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Interior Painting 6" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
            </div>
          </div>

          {/* Exterior Painting Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Exterior Painting</h3>
            <p className="text-gray-700 mb-4">
              Our exterior painting services ensure your home or office looks great from the outside. We use high-quality paints and materials to provide a durable and beautiful finish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="https://placehold.co/600x400" alt="Exterior Painting 1" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Exterior Painting 2" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Exterior Painting 3" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Exterior Painting 4" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Exterior Painting 5" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Exterior Painting 6" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
            </div>
          </div>

          {/* Commercial Painting Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Commercial Painting</h3>
            <p className="text-gray-700 mb-4">
              Our commercial painting services are designed to meet the unique needs of businesses. We work efficiently to deliver high-quality results on time and within budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="https://placehold.co/600x400" alt="Commercial Painting 1" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Commercial Painting 2" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Commercial Painting 3" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Commercial Painting 4" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Commercial Painting 5" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Commercial Painting 6" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
            </div>
          </div>

          {/* Residential Painting Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Residential Painting</h3>
            <p className="text-gray-700 mb-4">
              Our residential painting services are tailored to meet the needs of homeowners. Whether you're looking to refresh a single room or repaint your entire home, our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="https://placehold.co/600x400" alt="Residential Painting 1" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Residential Painting 2" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Residential Painting 3" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Residential Painting 4" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Residential Painting 5" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
              <img src="https://placehold.co/600x400" alt="Residential Painting 6" className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

