import React from 'react';

const Header = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="tel:+012345678" className="mr-4">
            <i className="bi bi-telephone text-secondary mr-2"></i>+012 345 6789
          </a>
          <a href="mailto:info@example.com">
            <i className="bi bi-envelope text-secondary mr-2"></i>info@example.com
          </a>
        </div>
        <div className="flex items-center">
          {['facebook-f', 'twitter', 'linkedin-in', 'instagram', 'youtube'].map((icon, index) => (
            <a key={icon} href="#" className={`text-white px-2 ${index !== 4 ? 'border-r border-white' : ''}`}>
              <i className={`fab fa-${icon} text-secondary`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;