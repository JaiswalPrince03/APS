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

      {/* <div className="flex flex-col md:flex-row items-center mb-16">
        <img src="https://placehold.co/600x400" alt="Three paintbrushes with different colors on a colorful background" className="w-full md:w-1/2 h-auto"/>
        <div className="md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">INTERIOR PAINTING</h2>
          <p className="text-gray-700 mb-4">
            Breathe new life into your home or office with our interior painting services. From bedrooms to living rooms, kitchens to hallways, our expert painters ensure every wall receives the highest level of attention. We work with you to choose the perfect colors and finishes that match your vision, enhancing the ambiance and style of your space.
            <span className="hidden"> Room transformations, Custom color consultations, High-quality paints and finishes, Flawless, smooth finishes for a pristine look</span>
          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded">READ MORE</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:mr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">EXTERIOR PAINTING</h2>
          <p className="text-gray-700 mb-4">
            The Rainbow's Colors company is an exterior painting leader, where every team member knows what it takes to deliver a high-quality finish that will keep your home or office looking great from the outside. All the exterior house painting Showcase we provide are done by highly experienced painters with at least a few years of prior experience. We continuously train and educate our exterior painters in best practices.
            <span className="hidden"> Know for a fact, that when the quality of the painting works is</span>
          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded">READ MORE</button>
        </div>
        <img src="https://placehold.co/600x400" alt="Exterior painting of a house" className="w-full md:w-1/2 h-auto"/>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16">
        <img src="https://placehold.co/600x400" alt="Commercial painting" className="w-full md:w-1/2 h-auto"/>
        <div className="md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">COMMERCIAL PAINTING</h2>
          <p className="text-gray-700 mb-4">
            Our commercial painting services are designed to meet the unique needs of businesses. We understand the importance of minimal disruption to your operations, and our team works efficiently to deliver high-quality results on time and within budget.
            <span className="hidden"> Office buildings, Retail spaces, Warehouses, Restaurants</span>
          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded">READ MORE</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:mr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">RESIDENTIAL PAINTING</h2>
          <p className="text-gray-700 mb-4">
            Our residential painting services are tailored to meet the needs of homeowners. Whether you're looking to refresh a single room or repaint your entire home, our team is here to help. We use high-quality paints and materials to ensure a beautiful, long-lasting finish.
            <span className="hidden"> Interior and exterior painting, Custom color matching, Detailed preparation and cleanup, Eco-friendly options</span>
          </p>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded">READ MORE</button>
        </div>
        <img src="https://placehold.co/600x400" alt="Residential painting" className="w-full md:w-1/2 h-auto"/>
      </div> */}

      {/* Title Section */}
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

      {/* Description Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Painting Services</h2>
        <p className="text-gray-700 text-center mb-4">
          At Rainbow's Colors, we offer a wide range of painting services to meet all your needs. Whether it's interior or exterior painting, our team of experts is here to provide high-quality finishes that will transform your space.
        </p>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded mx-auto block">READ MORE</button>
      </div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img src="https://placehold.co/600x400" alt="Interior Painting" className="w-full h-auto object-cover"/>
        <img src="https://placehold.co/600x400" alt="Exterior Painting" className="w-full h-auto object-cover"/>
        <img src="https://placehold.co/600x400" alt="Commercial Painting" className="w-full h-auto object-cover"/>
        <img src="https://placehold.co/600x400" alt="Residential Painting" className="w-full h-auto object-cover"/>
        <img src="https://placehold.co/600x400" alt="Custom Painting" className="w-full h-auto object-cover"/>
        <img src="https://placehold.co/600x400" alt="Specialty Painting" className="w-full h-auto object-cover"/>
      </div>
    </div>
  );
};

export default Services;

