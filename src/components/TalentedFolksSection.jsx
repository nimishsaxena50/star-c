import React from 'react';

const keywords = ['Focused', 'Collaborative', 'United', 'Vibrant', 'Dynamic', 'Motivated'];

const TalentedFolksSection = () => {
  return (
    <section className="py-20 relative text-white">
      
      <div className="absolute inset-0 bg-[#211736] rounded-[50px] transform skew-y-[-1deg] -mt-20 -mb-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="mb-4 space-x-4 text-xs font-medium text-gray-400">
            <span className="text-pink-500 italic">we are the team of</span>
            <span className="inline-block px-3 py-1 bg-pink-500/20 rounded-full border border-pink-500/50">Fun</span>
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full border border-gray-400/50">Inclusive</span>
        </div>

        <h2 className="text-6xl font-extrabold mt-2">20+Talented Folks</h2>
        
        <p className="max-w-2xl mx-auto mt-6 text-gray-300">
          From passion-driven dedication to impactful contribution, we do it all here. We are growing and will be excited to hear from you!
        </p>

        <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 flex items-center justify-center mx-auto">
          Join our team &rarr;
        </button>

        <div className="mt-12 flex justify-center space-x-6">
          {keywords.map((word, index) => (
            <span key={word} className={`text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 ${index % 2 === 0 ? 'transform translate-y-4' : 'transform -translate-y-4'}`}>
              {word}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TalentedFolksSection;