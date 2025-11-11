import React, { useContext } from "react";
import { myContext } from "../Context/Context";

const Header = () => {
  const { search, setSearch, year, setYear, genre, setGenre, rating, setRating } =
    useContext(myContext);

  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-gray-950 via-black to-gray-900 shadow-xl border-b border-gray-800 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-5">
          
          {/* 🔹 Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_20px_rgba(79,70,229,0.5)]">
              MV
            </div>
            <div>
              <h1 className="text-3xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                Movie<span className="text-white">Hub</span>
              </h1>
              <p className="text-sm text-gray-400 font-light tracking-wider -mt-1">
                Discover • Rate • Enjoy
              </p>
            </div>
          </div>

          {/* 🔹 Search & Filters */}
          <form
            className="flex-1 w-full"
            role="search"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Search movies"
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              
              {/* 🔍 Search Input */}
              <div className="flex items-center flex-1 bg-gray-800/70 border border-gray-700 rounded-lg shadow-inner focus-within:ring-2 focus-within:ring-blue-600 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-gray-400 ml-3"
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
                  placeholder="Search movies by title..."
                  className="w-full px-3 py-3 text-sm sm:text-base placeholder-gray-400 text-gray-100 bg-transparent outline-none"
                />
                <button
                  type="submit"
                  className="hidden sm:inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Search
                </button>
              </div>

              {/* 🎛 Filters */}
              <div className="flex gap-2 items-center flex-wrap justify-center sm:justify-start">
                
                {/* Genre */}
                <select
                  id="genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
                >
                  <option value="">All genres</option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Horror</option>
                  <option>Sci-Fi</option>
                  <option>Animation</option>
                </select>

                {/* Year */}
                <select
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
                >
                  <option value="">All years</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2010s</option>
                </select>

                {/* Rating */}
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-blue-500 transition"
                >
                  <option value="">Any rating</option>
                  <option value={9}>9+ (Top rated)</option>
                  <option value={8}>8+</option>
                  <option value={7}>7+</option>
                  <option value={6}>6+</option>
                  <option value={5}>5+</option>
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

            {/* 🔹 Subtext */}
            <div className="mt-3 hidden sm:flex items-center justify-between text-xs text-gray-400">
              <div>
                Showing <strong className="text-blue-400">results</strong> for your query
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
