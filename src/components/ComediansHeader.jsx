import React, { useState } from "react";

const profileImages = [
  "https://sanjosetheaters.org/wp-content/uploads/zakir_khan_200aa.jpg", // Original Comedian Image
  "https://i.pinimg.com/474x/29/31/fd/2931fdb2e050df8cd3b775d2c13d80fb.jpg", // New URL: Woman (will be the second image)
];

const ComediansHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false); // New state for rotation

  const nextImage = () => {
    setIsRotating(true); // Start rotation

    // After a short delay (e.g., 500ms for rotation animation), change the image
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
      setIsRotating(false); // Stop rotation after changing image
    }, 500); // This delay should match your CSS transition duration for rotation
  };

  const ACCENT_COLOR_CLASS = "text-[#e76f51]"; 
  
  return (
    <header className="relative bg-[#120a1f] text-white overflow-hidden py-12 md:py-24">
      
      {/* MAIN CONTAINER */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between relative">
        
        {/* COMBINED LEFT/MOBILE TITLE & CIRCLE CONTAINER */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 relative">

          {/* CIRCLE IMAGE */}
          <div className="w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl relative z-10 
              border-8 border-[#e76f51] transition-all duration-300">
            <img
              src={profileImages[currentImageIndex]} 
              alt="Comedian profile"
              // 🚨 Apply rotation class based on state
              className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                isRotating ? 'rotate-180 scale-90' : 'rotate-0 scale-100'
              }`} 
            />
          </div>

          {/* 'COMEDIANS' TITLE */}
          <h1 className="
            absolute left-0 top-1/2 -translate-y-1/2 
            text-4xl md:text-7xl lg:text-8xl 
            font-extrabold z-20 
            pr-2
            "
          >
            Comedians
          </h1>
        </div>


        {/* RIGHT SIDE TEXT: 'Choose from 100+ Categories' */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center md:items-start pl-0 md:pl-24 relative z-30">
          <h2 className="text-xl md:text-3xl font-semibold leading-tight text-center md:text-left">
            Choose <br /> from <span className={ACCENT_COLOR_CLASS}>100+ Categories</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400 text-center md:text-left">
             The home where content lives. It's a personalised pocket for your fandom.
          </p>
          
          {/* Explore Link */}
          <a href="#" className={`${ACCENT_COLOR_CLASS} inline-block mt-3 border-b-2 border-transparent hover:border-b-2 hover:border-[#e76f51] pb-1 text-sm md:text-base`}>
            Explore all categories →
          </a>
          
          {/* 'Click here to view more' Button */}
          <button
            onClick={nextImage}
            // Optional: Disable button during rotation to prevent rapid clicks
            disabled={isRotating} 
            className={`mt-6 text-sm ${ACCENT_COLOR_CLASS} border border-[#e76f51] py-1 px-4 rounded-full transition duration-300 hover:bg-[#e76f51] hover:text-white ${
                isRotating ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            Click here to view more
          </button>
        </div>
      </div>
    </header>
  );
};

export default ComediansHeader;
