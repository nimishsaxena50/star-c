import React from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import all necessary components
import ComediansHeader from './components/ComediansHeader';
import CategoryGrid from './components/CategoryGrid';
import CardPathSection from './components/CardPathSection';
import MeetOurSquads from './components/MeetOurSquads'; // This was MeetCoachSection in your original imports
import RecentShowsSection from './components/RecentShowsSection'; 
import TalentedFolksSection from './components/TalentedFolksSection';
import './index.css';

const App = () => {
  return (
    <div className="bg-[#120a1f] min-h-screen text-white font-sans overflow-hidden">
      {/* max-w-7xl: This div ensures content is centered and not too wide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <ComediansHeader /> 
        
        <CategoryGrid /> 
        
        <CardPathSection />

        <MeetOurSquads /> 

        <RecentShowsSection />
        
        <TalentedFolksSection />

      </div>
    </div>
  );
};

export default App;