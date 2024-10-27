import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-white">
      <main>
        <div className="relative">
          <img src="https://placehold.co/1920x600" alt="Colorful splash background" className="w-full"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800">WE LOVE WORKING WITH DIFFERENT COLORS!</h1>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="max-w-4xl mx-auto p-8 flex">
            <div className="w-1/2">
              <img src="https://placehold.co/600x400" alt="Colorful paint splashes" className="w-full h-auto"/>
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Something About Us</h2>
              <h1 className="text-5xl text-blue-400 font-bold mb-4">About Us</h1>
              <p className="italic text-gray-500 mb-4">Rainbow's Colors' team is proud to be one of the most popular painting companies in the city.</p>
              <p className="text-gray-700 mb-4">We at the Rainbow's Colors company are pleased to offer you a wide variety of painting services, and hire only the best painters to take care of your residential house.</p>
              <p className="text-gray-700 mb-4">We value both the technical and artistic sides of our job in every Showcase... The fact how much does that kind of passion affects the overall quality shows not only through our 3-year painting warranty but also in our Photo Gallery, featuring the most impressive painting showcases that we undertook that far.</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-xl font-bold mb-2">ENVIRONMENT FRIENDLINESS</h2>
              <p>One of the most important things that we employ in our work is the usage of eco-friendly paints and finishes. This way we make our part in protecting the world's environment.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">VARIETY OF SERVICES</h2>
              <p>With so many things to paint both inside and outside of your houses, we've got a real range of services here. This means we can do any sort of residential or commercial works.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">SEASONED PROFESSIONALS</h2>
              <p>Besides the fact that almost all of our employees have more than 5 years of work experience at hand, all of them have a steady pair of hands and a good eye for the color!</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">AFFORDABLE PRICING</h2>
              <p>On top of having an awesome range of painting services, be sure that our pricing and fees we charge for the painting job are just as competitive.</p>
            </div>
          </div>
          <div className="bg-blue-100 py-8">
            <div className="grid grid-cols-4 text-center text-blue-800">
              <div>
                <i className="fas fa-paint-brush text-4xl mb-2"></i>
                <h3 className="text-4xl font-bold">250</h3>
                <p className="text-lg">PROJECTS COMPLETED</p>
              </div>
              <div>
                <i className="fas fa-users text-4xl mb-2"></i>
                <h3 className="text-4xl font-bold">132</h3>
                <p className="text-lg">STAFF MEMBERS</p>
              </div>
              <div>
                <i className="fas fa-paint-roller text-4xl mb-2"></i>
                <h3 className="text-4xl font-bold">08</h3>
                <p className="text-lg">PAINTING SERVICES</p>
              </div>
              <div>
                <i className="fas fa-lightbulb text-4xl mb-2"></i>
                <h3 className="text-4xl font-bold">32</h3>
                <p className="text-lg">AWARDS WON</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
