import React from "react";
import { Film } from "lucide-react"; 

const Placeholder = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden rounded-2xl shadow-inner">
      
     
      <img
        src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1600&q=80"
        alt="Cinematic Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
      />

  
      <div className="relative text-center px-6 py-12">
        <div className="flex justify-center mb-4">
          <Film className="w-16 h-16 text-blue-400 drop-shadow-md" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Discover Your Next Favorite Movie 🎬
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Search for any movie to explore details, posters, and ratings from across the cinematic universe.
        </p>
       
      </div>

    
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default Placeholder;
