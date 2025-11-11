import React from "react";
import { Link } from "react-router-dom";
import { Clapperboard, Film } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.25),transparent_60%)] animate-pulse blur-3xl"></div>

   
      <div className="relative z-10 mb-8 flex justify-center items-center">
        <div className="w-24 h-24 border-4 border-blue-500/30 rounded-full animate-spin-slow relative">
          <div className="absolute inset-3 border-4 border-indigo-500/20 rounded-full"></div>
          <Film className="absolute inset-0 m-auto w-10 h-10 text-blue-400 opacity-80" />
        </div>
      </div>

      <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] mb-3">
        404
      </h1>

  
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">
        The Film Reel Broke! 🎞️
      </h2>

   
      <p className="text-gray-400 max-w-md text-center mb-10 leading-relaxed">
        Looks like the scene you’re trying to find didn’t make it to the final cut.  
        Don’t worry — every great story deserves a new beginning!
      </p>

   
      <div className="p-4 rounded-full bg-blue-600/20 border border-blue-500/30 shadow-lg mb-6 animate-bounce">
        <Clapperboard className="w-10 h-10 text-blue-400" />
      </div>

      
     

    
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-700/20 via-transparent to-transparent animate-pulse"></div>
    </div>
  );
};

export default PageNotFound;
