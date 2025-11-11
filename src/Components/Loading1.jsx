import React from "react";

const Loading1 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-6">
      {/* Animated Ring Loader */}
      <div className="relative flex justify-center items-center">
        {/* Outer glowing ring */}
        <div className="w-16 h-16 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>

        {/* Middle ring (soft pulse) */}
        <div className="absolute w-10 h-10 border-4 border-blue-500/30 rounded-full animate-pulse"></div>

        {/* Inner core (subtle glow) */}
        <div className="absolute w-5 h-5 bg-blue-500/80 rounded-full blur-sm animate-ping"></div>
      </div>

      {/* Text with animated dots */}
      <p className="text-gray-300 text-lg tracking-wide flex items-center">
        Loading movies
        <span className="ml-1 flex">
          <span className="w-1 h-1 bg-blue-400 rounded-full mx-[1px] animate-bounce [animation-delay:-0.2s]"></span>
          <span className="w-1 h-1 bg-blue-400 rounded-full mx-[1px] animate-bounce [animation-delay:-0.1s]"></span>
          <span className="w-1 h-1 bg-blue-400 rounded-full mx-[1px] animate-bounce"></span>
        </span>
      </p>
    </div>
  );
};

export default Loading1;
