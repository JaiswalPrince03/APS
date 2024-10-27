import React from 'react';
import Logo from '../assets/logo.jpg'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-400 to-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={Logo} alt="" className="h-20 w-18 rounded-full" />
            <div className="ml-4">
              <h1 className="text-white text-lg font-bold">Artistic Paints Stripes</h1>
            </div>
          </div>

          {/* Location and Contact Details */}
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
            <div className="text-center md:text-left p-4">
              <h2 className="text-xl font-bold text-[#2a2452]">LOCATION:</h2>
              <p className="text-Black-600">Aziza Colony, House No. 07, Bagat, Near MET School</p>
              <p className="text-Black-600">Srinagar, India 193005</p>
            </div>
            <div className="text-center md:text-left p-4">
              <h2 className="text-xl font-bold text-[#2a2452]">CONTACT:</h2>
              <p className="text-black-600">Phone: +91-7889847956</p>
              <p className="text-black-600">Mail Id: rahulkritik07@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-xl bg-white text-blue-600 p-2 rounded-full hover:bg-blue-300 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-xl bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center mt-8">
          Artistic Paints Stripes {new Date().getFullYear()}.  Made With ❤️ by Prince Jaiswal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
