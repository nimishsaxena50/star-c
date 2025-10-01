import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Array of image URLs for scrolling effect
const profileImages = [
  'https://i.pinimg.com/736x/4e/2e/ea/4e2eeae5b4f298a11e215146d5940d1c.jpg', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw1vBfWNe2MiAZmGvXMBcYJ1i3vXGEHB4cg&s', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqfcy_ks2foasxgED598eq2djH142d6_TsA&s', 
  'https://i.pinimg.com/736x/bf/57/ec/bf57ec4ce28ce03c07ca647f2bd4113a.jpg', 
];

const ComediansHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewCategoriesClick = (e) => {
    e.preventDefault(); 
    const nextIndex = (currentImageIndex + 1) % profileImages.length;
    setCurrentImageIndex(nextIndex);
  };
  
  const currentTitle = 'Singers'; 

  return (
    <header className="flex justify-between items-center mb-20 relative h-[450px]">
      
      {/* 1. LEFT SECTION: Title (Singers) - FIX: Increased width to 40% and padding-right to 24 to push it closer to the circle */}
      <div className="w-[40%] text-right pr-24"> 
        <h1 className="text-6xl font-extrabold">{currentTitle}</h1> 
      </div>
      
      {/* 2. CENTER SECTION: Big Scrolling Circle */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        
        {/* The Big Circle */}
        <div className="w-80 h-80 rounded-full border-4 border-pink-500 overflow-hidden shadow-2xl relative">
          <img 
            src={profileImages[currentImageIndex]} 
            alt="Profile Image" 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        
        {/* "Click here to view more" link */}
        <a 
          href="#" 
          onClick={handleViewCategoriesClick}
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-pink-400 hover:text-pink-300 whitespace-nowrap"
        >
          Click here to view more
        </a>
      </div>
      
      {/* 3. RIGHT SECTION: Categories Info - FIX: Adjusted width and padding-left to match the shift */}
      <div className="w-[40%] text-left pl-24">
        <h2 className="text-3xl font-semibold leading-tight">
          Choose <br/> from 100+ Categories
        </h2>
        <a 
          href="#" 
          className="text-sm text-pink-500 hover:text-pink-400 flex items-center justify-start mt-2"
        >
          Explore all categories &rarr;
        </a>
      </div>
    </header>
  );
};

export default ComediansHeader;