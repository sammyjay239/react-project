import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* <img src={image1} className='w-100 h-30' alt="" /> */}

        <div className="mb-2 md:mb-0">
          <span className="font-bold text-lg">MyBlog</span> &copy; {new Date().getFullYear()}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter text-xl hover:text-blue-400"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram text-xl hover:text-pink-400"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook text-xl hover:text-blue-500"></i>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp text-xl hover:text-blue-500"></i>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
         <p>&copy; 2025 Blog Website. All rights reserved.</p>
        <p>
          <a href="#"
            className="">Privacy Policy
          </a>
          <a href="#"
            className="">Terms of Use
          </a>
        </p>
      </div>

      

    </footer>
  );
};

export default Footer
