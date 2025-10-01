import React from 'react';

const CoachCard = ({ name, bio, image }) => (
  <div className="text-center mx-4">
    <div className="w-16 h-16 rounded-full border-2 border-pink-500/50 mx-auto overflow-hidden mb-2">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <p className="text-sm font-medium">{name}</p>
  </div>
);

const MeetCoachSection = () => {
  return (
    <section className="relative py-20 text-center">
      <h2 className="text-2xl font-bold mb-10">Meet Our Stand-Up Coach!</h2>
      
      <div className="relative inline-block p-6 rounded-3xl bg-gray-800/80 shadow-2xl border border-pink-500/50 mb-12">
        <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-pink-500 mb-3">
          <img src="coach-dyinson.png" alt="Deban Dyinson" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold">Deban Dyinson</h3>
        <p className="text-sm text-pink-400 mb-2">The Funniest Man Alive</p>
        <p className="text-xs text-gray-400 max-w-xs mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab!
        </p>
      </div>
      
      <div className="flex justify-center -space-x-8">
        <CoachCard name="Trainee A" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw1vBfWNe2MiAZmGvXMBcYJ1i3vXGEHB4cg&s" />
        <CoachCard name="Trainee B" image="trainee-b.png" />
        <CoachCard name="Trainee C" image="trainee-c.png" />
        <CoachCard name="Trainee D" image="trainee-d.png" />
      </div>
      
    </section>
  );
};

export default MeetCoachSection;