import React from 'react'
import chicken from '../assets/chicken.png'
import book from '../assets/book.png'

const Hero = () => {
    return (
        <section className="bg-blue-50 flex justify-between items-center py-8 px-8 md:px-16 rounded-lg relative">
            {/* Left Side - Text Content */}
            <div className="flex-1 space-y-4">
                {/* Badge */}
                <div className="flex items-center gap-2 bg-white p-3 rounded-full shadow-md w-max">
                    <span className="block w-6 h-6"><img src={book} alt="" /></span>
                    <span className="text-sm font-semibold text-gray-600">Hot Recipes</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Spicy delicious <br /> chicken wings
                </h1>

                {/* Description */}
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Time and Category */}
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 bg-slate-300 p-2 rounded-lg">
                        <i className="fa-solid fa-clock text-black"></i>
                        <span className="text-gray-600">30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-300 p-2 rounded-lg">
                        <i className="fa-solid fa-drumstick-bite text-black"></i>
                        <span className="text-gray-600">Chicken</span>
                    </div>
                </div>

                {/* Button */}
                <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    View Recipes
                    <i className="fa-solid fa-play"></i>
                </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 hidden md:block">
                <img
                    src={chicken}
                    alt="Spicy Chicken Wings"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </section>
    );
};

export default Hero;

