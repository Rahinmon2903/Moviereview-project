import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Cardpages = () => {
  const { id } = useParams();
  //for unique id
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=eb09daa8&i=${id}&plot=full`
        );
        setMovie(res.data);
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!movie) {
    return (
      <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
     
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80"
          alt="Loading Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
        />

      
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin shadow-[0_0_25px_rgba(59,130,246,0.7)]"></div>
            <div className="absolute inset-2 border-4 border-blue-500/20 rounded-full"></div>
          </div>

          <h2 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse drop-shadow-lg">
            Loading Movie Details...
          </h2>

      
          <p className="text-gray-400 text-sm animate-pulse tracking-widest uppercase">
            Please wait while we fetch the magic 🎬
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#070707] text-white overflow-hidden">
  
      <div
        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-40 scale-110"
        style={{
          backgroundImage: `url(${movie.Poster !== "N/A" ? movie.Poster : ""})`,
        }}
      ></div>

    
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>

      {/*  Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center md:items-start animate-fadeIn">
        {/* Poster */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg"
            }
            alt={movie.Title}
            className="w-full rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            {movie.Title}
          </h1>

          {/* Year + Genre + Runtime */}
          <div className="flex flex-wrap items-center gap-3 mb-6 text-gray-300 text-sm">
            <span className="px-3 py-1 bg-gray-800/70 rounded-md border border-gray-700">
              📅 {movie.Year}
            </span>
            <span className="px-3 py-1 bg-gray-800/70 rounded-md border border-gray-700">
              🎭 {movie.Genre}
            </span>
            <span className="px-3 py-1 bg-gray-800/70 rounded-md border border-gray-700">
              ⏱ {movie.Runtime}
            </span>
            <span className="px-3 py-1 bg-gray-800/70 rounded-md border border-gray-700">
              🔖 Rated: {movie.Rated}
            </span>
          </div>

          {/* Plot */}
          <p className="text-gray-200 leading-relaxed text-lg mb-8">
            {movie.Plot}
          </p>

          {/* Ratings Section */}
          <div className="flex items-center gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400 drop-shadow-md">
                ⭐ {movie.imdbRating}
              </p>
              <p className="text-gray-400 text-sm">IMDb Rating</p>
            </div>
            {movie.Ratings?.map((r, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-semibold text-blue-400">
                  {r.Value}
                </p>
                <p className="text-gray-400 text-xs">{r.Source}</p>
              </div>
            ))}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-300">
            <p>
              <span className="font-semibold text-white">🎬 Director:</span>{" "}
              {movie.Director}
            </p>
            <p>
              <span className="font-semibold text-white">✍️ Writer:</span>{" "}
              {movie.Writer}
            </p>
            <p>
              <span className="font-semibold text-white">🧑‍🤝‍🧑 Actors:</span>{" "}
              {movie.Actors}
            </p>
            <p>
              <span className="font-semibold text-white">🏆 Awards:</span>{" "}
              {movie.Awards}
            </p>
            <p>
              <span className="font-semibold text-white">💰 Box Office:</span>{" "}
              {movie.BoxOffice || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-white">🎞️ Production:</span>{" "}
              {movie.Production || "Unknown"}
            </p>
            <p>
              <span className="font-semibold text-white">🌍 Country:</span>{" "}
              {movie.Country}
            </p>
            <p>
              <span className="font-semibold text-white">🗣️ Language:</span>{" "}
              {movie.Language}
            </p>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            ← Back to Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cardpages;
