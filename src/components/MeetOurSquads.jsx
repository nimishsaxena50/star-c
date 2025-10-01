import React from 'react';

const squad = {
  name: 'Design Dynamos',
  members: 5,
  description: 'The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination',
  image: '/images/squad_main.jpg',
};

const MeetOurSquads = () => {
  return (
    <section className="py-20 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Meet Our Starclinch Squads</h2>
      
      <div className="flex flex-col items-center">
        
        {/* Carousel/Member Image (Centered) */}
        <div className="relative w-full max-w-xl flex justify-center items-center">
            <div className="absolute w-80 h-80 rounded-full bg-[#1e0a30] opacity-50 blur-3xl"></div>
            <div className="absolute w-96 h-96 rounded-full bg-[#1e0a30] opacity-30 blur-3xl"></div>
            
            
            <button className="absolute left-0 z-10 p-2 text-gray-500 hover:text-white transition-colors">
                &larr; 
            </button>
            <button className="absolute right-0 z-10 p-2 text-gray-500 hover:text-white transition-colors">
                &rarr; 
            </button>

            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-pink-500/50">
                <img src={squad.image} alt={squad.name} className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-1/2 left-12 transform -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden opacity-50 blur-[1px]">
                <img src="/images/squad_side1.jpg" alt="Member" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden opacity-50 blur-[1px]">
                <img src="/images/squad_side2.jpg" alt="Member" className="w-full h-full object-cover" />
            </div>
        </div>

        <span className="mt-8 text-xs px-3 py-1 bg-green-600 rounded-full">{squad.members} Members</span>
        <h3 className="text-4xl font-extrabold mt-3">{squad.name}</h3>
        <p className="max-w-md mt-4 text-gray-400">
          {squad.description}
        </p>
        <a href="#" className="mt-4 text-pink-500 hover:text-pink-400 flex items-center">
          Our design team is growing. **Apply Now** &gt;
        </a>
      </div>
    </section>
  );
};

export default MeetOurSquads;