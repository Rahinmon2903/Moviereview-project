import React from "react";
import { Film } from "lucide-react";

const Placeholder = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden rounded-2xl shadow-lg">
      
      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_60%)] animate-pulse blur-3xl" />

      {/* Subtle Background Image */}
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
        alt="Movie Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative text-center z-10 px-6 py-12">
        <div className="flex justify-center mb-5">
          <div className="p-5 rounded-full bg-blue-600/20 border border-blue-500/30 shadow-lg">
            <Film className="w-14 h-14 text-blue-400 animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide drop-shadow-lg">
          Discover Your Next Favorite Movie 🎬
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
          Explore detailed info, ratings, and posters — dive into the cinematic universe and find something new to watch today.
        </p>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-700/20 via-transparent to-transparent" />
    </div>
  );
};

export default Placeholder;
