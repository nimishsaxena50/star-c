// src/components/CardPathSection.jsx

import React, { useState } from 'react';

const pathCards = [
  { id: 1, title: 'Late Night Mingle', subtitle: 'Party for the Dudes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSETUVkJem8JfQS8e_5tcDp1LUgvNWk2v6sw&s', position: 'left' },
  { id: 2, title: 'Late Night Mingle', subtitle: 'Party for the Dudes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSETUVkJem8JfQS8e_5tcDp1LUgvNWk2v6sw&s', position: 'right' },
  { id: 3, title: 'Late Night Mingle', subtitle: 'Party for the Dudes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSETUVkJem8JfQS8e_5tcDp1LUgvNWk2v6sw&s', position: 'left' },
  { id: 4, title: 'Late Night Mingle', subtitle: 'Party for the Dudes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSETUVkJem8JfQS8e_5tcDp1LUgvNWk2v6sw&s', position: 'right' },
];

const CardPathSection = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const getTransformStyle = (cardId, currentPosition) => {
    const isHovered = cardId === hoveredCardId;
    
    // Default Tilt
    const defaultTilt = currentPosition === 'left' ? -10 : 10; // Inclination increased to -10/10 for better effect
    // Opposite Tilt on hover
    const hoverTilt = currentPosition === 'left' ? 10 : -10;

    // Horizontal positioning logic (brings it close to the center)
    const translateXOffset = currentPosition === 'left' ? '-100%' : '0'; 
    
    return {
      transform: `rotate(${isHovered ? hoverTilt : defaultTilt}deg) scale(${isHovered ? 1.05 : 1}) translateX(${translateXOffset})`,
      zIndex: isHovered ? 20 : 10,
    };
  };

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative h-[650px] w-full"> {/* Height slightly increased for visual clarity */}
          
          {pathCards.map((card, index) => {
            const isHovered = card.id === hoveredCardId;
            
            return (
              <div
                key={card.id}
                className={`absolute w-64 h-40 transition-all duration-300 ease-in-out cursor-pointer`}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}

                style={{
                  top: `${index * 160}px`, // Spacing adjusted for a tighter curve
                  left: '50%', // Anchor to the center line
                  ...getTransformStyle(card.id, card.position),
                }}
              >
                <div className={`w-full h-full relative overflow-hidden rounded-lg shadow-2xl bg-[#2e1d4b]`}>
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className={`absolute inset-0 bg-black/30 flex items-end p-3 text-white transition-all duration-300 ${card.position === 'left' ? 'justify-end text-right' : 'justify-start text-left'}`}>
                      <div className="p-1"> {/* Extra padding for the text container */}
                        <p className={`text-sm font-semibold ${isHovered ? 'text-lg font-extrabold text-pink-300' : ''}`}>{card.title}</p>
                        <p className={`text-xs text-gray-300 ${isHovered ? 'text-gray-100' : ''}`}>{card.subtitle}</p>
                      </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardPathSection;