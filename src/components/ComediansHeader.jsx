import React, { useState } from "react";

const profileImages = [
  "https://i.pinimg.com/736x/4e/2e/ea/4e2eeae5b4f298a11e215146d5940d1c.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw1vBfWNe2MiAZmGvXMBcYJ1i3vXGEHB4cg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqfcy_ks2foasxgED598eq2djH142d6_TsA&s",
  "https://i.pinimg.com/736x/bf/57/ec/bf57ec4ce28ce03c07ca647f2bd4113a.jpg",
];

const ComediansHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewCategoriesClick = (e) => {
    e.preventDefault();
    const nextIndex = (currentImageIndex + 1) % profileImages.length;
    setCurrentImageIndex(nextIndex);
  };

  const currentTitle = "Singers";

  return (
    <header className="flex flex-col md:flex-row justify-between items-center md:h-[450px] relative px-6 md:px-20 py-10">
      
      {/* LEFT: Title (thoda overlap feel, but always above circle) */}
      <div className="w-full md:w-[35%] text-center md:text-right mb-6 md:mb-0 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold relative inline-block md:-mr-10">
          {currentTitle}
        </h1>
      </div>

      {/* CENTER: Circle with Image */}
      <div className="relative flex flex-col items-center md:absolute left-1/2 top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-0">
        <div className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-pink-500 overflow-hidden shadow-2xl relative">
          <img
            src={profileImages[currentImageIndex]}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        <a
          href="#"
          onClick={handleViewCategoriesClick}
          className="mt-4 text-pink-400 text-sm hover:text-pink-300"
        >
          Click here to view more
        </a>
      </div>

      {/* RIGHT: Info */}
      <div className="w-full md:w-[35%] text-center md:text-left mt-6 md:mt-0 relative z-10">
        <h2 className="text-xl md:text-3xl font-semibold leading-tight">
          Choose <br className="hidden md:inline" /> from 100+ Categories
        </h2>
        <a
          href="#"
          className="text-sm text-pink-500 hover:text-pink-400 inline-block mt-2"
        >
          Explore all categories →
        </a>
      </div>
    </header>
  );
};

export default ComediansHeader;
