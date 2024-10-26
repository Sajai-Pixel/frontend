import React, { useState } from 'react'

const Header = () =>  {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="p-6 bg-gray-50 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-orange-500">Kitchen Chronicles</h1>
  
        {/* Mobile Menu Toggle Button */}
        <button 
          className="block md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars text-gray-700 text-xl"></i>
        </button>
  
        {/* Links for larger screens */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-bold">
          <li className="hover:text-blue-500 cursor-pointer transition duration-200">Home</li>
          <li className="hover:text-blue-500 cursor-pointer transition duration-200">Add Recipes</li>
          <li className="hover:text-blue-500 cursor-pointer transition duration-200">My Wishlist</li>
          <li className="hover:text-blue-500 cursor-pointer transition duration-200">About</li>
        </ul>
  
        {/* Profile Section */}
        <div className="hidden md:flex items-center gap-3">
          <span className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-400 text-white font-bold">S</span>
          <p className="text-gray-800 font-medium">Sajai</p>
          <i className="fa-solid fa-right-from-bracket text-gray-700 hover:text-blue-500 cursor-pointer transition duration-200"></i>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-4 md:hidden">
            <li className="hover:text-blue-500 cursor-pointer transition duration-200">Home</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-200">Add Recipes</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-200">My Wishlist</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-200">About</li>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-400 text-white font-bold">S</span>
              <p className="text-gray-800 font-medium">Sajai</p>
              <i className="fa-solid fa-right-from-bracket text-gray-700 hover:text-blue-500 cursor-pointer transition duration-200"></i>
            </div>
          </ul>
        )}
      </div>
    );
  }

export default Header
