import React from 'react';

const Services = () => {
  return (
    <div className="p-8">
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

      <div className="flex flex-col md:flex-row items-center mb-16">
        <img src="https://placehold.co/600x400" alt="Three paintbrushes with different colors on a colorful background" className="w-full md:w-1/2 h-auto"/>
        <div className="md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">INTERIOR PAINTING</h2>
          <p className="text-gray-700 mb-4">
          Breathe new life into your home or office with our interior painting services. From bedrooms to living rooms, kitchens to hallways, our expert painters ensure every wall receives the highest level of attention. We work with you to choose the perfect colors and finishes that match your vision, enhancing the ambiance and style of your space.

          Room transformations
          Custom color consultations
          High-quality paints and finishes
          Flawless, smooth finishes for a pristine look          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded">READ MORE</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">EXTERIORS PAINTING</h2>
          <p className="text-gray-700">
            The Rainbow's Colors company is an exterior painting leader, where every team member knows what it takes to deliver a high-quality finish that will keep your home or office looking great from the outside. All the exterior house painting Showcase we provide are done by highly experienced painters with at least a few years of prior experience. We continuously train and educate our exterior painters in best practices. Know for a fact, that when the quality of the painting works is
          </p>
        </div>
        <img src="https://placehold.co/600x400" alt="Modern house exterior with a beautiful paint job" className="w-full md:w-1/2 h-auto"/>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16">
        <img src="https://placehold.co/600x400" alt="Three paintbrushes with different colors on a colorful background" className="w-full md:w-1/2 h-auto"/>
        <div className="md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">RESIDENTIAL PAINTING</h2>
          <p className="text-gray-700 mb-4">
            If you've ever wanted to make your business stand out, make a difference and simply catch an eye of any person who goes by your sign – the painted signage will be the perfect service for your needs! The signage service will set your business apart from the rest. It's not that long as our company has taken our ability to create murals one step further, to include custom painted Signs for businesses! Rainbow's Colors has already altered the traditional way of displaying your company's name, brand, and/or logo on your building. If you're looking for something more than simply hire us!
          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded">READ MORE</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">COMMERCIAL PAINTING</h2>
          <p className="text-gray-700">
            The Rainbow's Colors company is an exterior painting leader, where every team member knows what it takes to deliver a high-quality finish that will keep your home or office looking great from the outside. All the exterior house painting Showcase we provide are done by highly experienced painters with at least a few years of prior experience. We continuously train and educate our exterior painters in best practices. Know for a fact, that when the quality of the painting works is
          </p>
        </div>
        <img src="https://placehold.co/600x400" alt="Modern house exterior with a beautiful paint job" className="w-full md:w-1/2 h-auto"/>
      </div>

     

    </div>
  );
};

export default Services;
