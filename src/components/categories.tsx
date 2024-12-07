"use client"

import { useState } from "react";
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad, FaClock } from "react-icons/fa";

const categories = [
  { id: 1, name: "Phones", icon: <FaMobileAlt /> },
  { id: 2, name: "Computers", icon: <FaLaptop /> },
  { id: 3, name: "SmartWatch", icon: <FaClock /> },
  { id: 4, name: "Camera", icon: <FaCamera /> },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones /> },
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(4); // Default "Camera" active

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 pb-[400px]">
      {/* Heading */}
      <div className="text-center mb-6 mr-[1000px]">
        <p className="text-red-500 font-semibold mr-[150px]">Categories</p>
        <h1 className="text-2xl md:text-3xl font-bold">Browse By Category</h1>
      </div>

      {/* Categories Container */}
      <div className="relative w-full max-w-5xl">
        {/* Horizontal Scrolling Categories */}
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center min-w-[120px] md:w-28 h-28 border rounded-lg cursor-pointer transition ${
                activeCategory === category.id
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-800 hover:shadow-md"
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              
             <p className="text-sm md:text-base font-medium">{category.name}</p>
            </div>
            
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 flex gap-2">
          <button className="w-10 h-10 bg-white border rounded-full shadow-sm hover:shadow-md flex items-center justify-center">
            &#8592;
          </button>
          <button className="w-10 h-10 bg-white border rounded-full shadow-sm hover:shadow-md flex items-center justify-center">
            &#8594;
          </button>
        
        </div>
      </div>
    </div>
  );
}