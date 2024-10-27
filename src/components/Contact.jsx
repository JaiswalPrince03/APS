import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col p-8">
      <h1 className="text-4xl font-bold mb-8">CONTACT US</h1>
      
      {/* Location Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">OUR LOCATION</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.5741911271804!2d-118.39042068478!3d34.14391998058185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2be4f9f4a3d8d%3A0x7f6a0a581f8a1!2s11559%20Ventura%20Blvd%2C%20Studio%20City%2C%20CA%2091604%2C%20USA!5e0!3m2!1sen!2s!4v1649795073139!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Address and Message Sections */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Address Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          
          <div className="mb-4">
            <h2 className="font-bold">ADDRESS:</h2>
            <p>Aziza Colony, House No. 07, Bagat, Near MET School</p>
            <p>Srinagar, India 193005</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">PHONE NUMBERS:</h2>
            <p>Phone: <a href="tel:+91-7889847956" className="text-blue-500">+91-7889847956</a></p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">E-MAIL</h2>
            <p><a href="mailto:rahulkritik07@gmail.com" className="text-blue-500">rahulkritik07@gmail.com</a></p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-[#2a2452]"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="#" className="text-[#2a2452]"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </div>
        
        {/* Message Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">SEND US A MESSAGE</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full p-2 border border-gray-300 rounded bg-gray-100" />
            <input type="email" placeholder="Your e-mail" className="w-full p-2 border border-gray-300 rounded bg-gray-100" />
            <textarea placeholder="Your message" className="w-full p-2 border border-gray-300 rounded bg-gray-100 h-32"></textarea>
            <button type="submit" className="bg-[#2a2452] text-white py-2 px-4 rounded">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
