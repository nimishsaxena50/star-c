import React from 'react';

const recentShow = {
  artist: 'Nora Fatehi',
  host: 'XYZ',
  location: 'Pune',
  date: '14 March 2023',
  image: 'https://i.pinimg.com/736x/4e/2e/ea/4e2eeae5b4f298a11e215146d5940d1c.jpg',
};

const RecentShowsSection = () => {
  return (
    <section className="py-20 text-white text-center relative overflow-hidden">
      
      <p className="absolute left-0 top-1/4 transform -translate-x-full rotate-[-45deg] whitespace-nowrap text-xs text-gray-600 tracking-[0.5em] uppercase">
        ★ HEADLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY ★
      </p>
      <p className="absolute right-0 top-1/4 transform translate-x-full rotate-[45deg] whitespace-nowrap text-xs text-gray-600 tracking-[0.5em] uppercase">
        ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
      </p>

      <h2 className="text-3xl font-bold mb-12">Recent shows made star-studded via StarClinch</h2>
      
      <div className="flex justify-center items-center w-full">
        <button className="p-2 text-white hover:text-pink-500 transition-colors mr-6">&larr;</button>

        <div className="flex max-w-4xl mx-auto items-center text-left">
          
          <div className="w-64 h-80 relative overflow-hidden rounded-2xl shadow-xl bg-gray-900 border-b-4 border-pink-500/50">
            <img 
              src={recentShow.image} 
              alt={recentShow.artist} 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          
          <div className="ml-8 max-w-md">
            <h3 className="text-3xl font-semibold leading-snug">
              **{recentShow.artist}** for an event hosted by **{recentShow.host}** performed at <span className="text-pink-400">{recentShow.location}</span>.
            </h3>
            <p className="mt-4 text-sm text-gray-400">📅 {recentShow.date}</p>
          </div>
        </div>
        
        <button className="p-2 text-white hover:text-pink-500 transition-colors ml-6">&rarr;</button>
      </div>
    </section>
  );
};

export default RecentShowsSection;