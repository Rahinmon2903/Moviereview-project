import React, { useContext } from "react";
import { myContext } from "../Context/Context";

const Header = () => {
  const {
    search,
    setSearch,
    year,
    setYear,
    genre,
    setGenre,
    rating,
    setRating,
  } = useContext(myContext);

  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-gray-950 via-black to-gray-900 shadow-xl border-b border-gray-800 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-5">
          {/* 🔹 Logo + Brand */}
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_25px_rgba(79,70,229,0.6)]">
              CV
            </div>

            {/* Brand Title */}
            <div>
              <h1 className="text-3xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_10px_rgba(79,70,229,0.6)]">
                Cine<span className="text-white">Verse</span>
              </h1>
              <p className="text-sm text-gray-400 font-light tracking-wider -mt-1 italic">
                Explore • Watch • Review
              </p>
            </div>
          </div>

          {/* Search & Filters */}
          <form
            className="flex-1 w-full"
            role="search"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Search movies"
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {/* 🔍 Search Input */}
              <div className="flex items-center flex-1 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 border border-gray-700 rounded-xl px-3 py-1.5 text-sm shadow-inner focus-within:ring-2 focus-within:ring-blue-600 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.45)] transition-all duration-300 backdrop-blur-sm">
                <svg
                  className="w-5 h-5 text-gray-400 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  />
                </svg>
                <input
                  id="movie-search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  name="search"
                  type="search"
                  placeholder="🔍 Search by movie title..."
                  className="w-full px-3 py-2 bg-transparent text-gray-100 placeholder-gray-400 outline-none font-medium tracking-wide"
                />
                <button
                  type="submit"
                  className="hidden sm:inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                >
                  Search
                </button>
              </div>

              {/*  Filters */}
              <div className="flex gap-2 items-center flex-wrap justify-center sm:justify-start">
                {/* Genre */}
                <select
                  id="genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 border border-gray-700 text-gray-100 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.45)] transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <option value="">🎭 All Genres</option>
                  <option value="Action">🔥 Action</option>
                  <option value="Adventure">🗺️ Adventure</option>
                  <option value="Comedy">😂 Comedy</option>
                  <option value="Drama">🎭 Drama</option>
                  <option value="Horror">👻 Horror</option>
                  <option value="Sci-Fi">🚀 Sci-Fi</option>
                  <option value="Animation">🐭 Animation</option>
                </select>

                {/* Year */}
                <select
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 border border-gray-700 text-gray-100 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.45)] transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <option value="">📅 All Years</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2010">2010s</option>
                </select>

                {/* Rating */}
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 border border-gray-700 text-gray-100 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.45)] transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <option value="">🎞️ Any Rating</option>
                  <option value="9">⭐ 9+ — Top Rated</option>
                  <option value="8">🌟 8+ — Critically Acclaimed</option>
                  <option value="7">✨ 7+ — Great Picks</option>
                  <option value="6">🎬 6+ — Worth Watching</option>
                  <option value="5">🍿 5+ — Casual Fun</option>
                </select>
              </div>

              {/* Mobile Go Button */}
              <button
                type="submit"
                className="sm:hidden inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Go
              </button>
            </div>

            {/* Subtext */}
            <div className="mt-3 hidden sm:flex items-center justify-between text-xs text-gray-400">
              <div>
                Showing <strong className="text-blue-400">results</strong> for
                your query
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setGenre("");
                    setYear("");
                    setRating("");
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-200"
                >
                  Reset Filters
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-200"
                >
                  Sort: Popularity
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
