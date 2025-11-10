import React, { useContext } from 'react';
import { myContext } from '../Context/Context';

const Header = () => {
    const {search,setSearch,year,setYear,genre,setGenre,rating,setRating}=useContext(myContext);
    return (
        <>
    <header className="bg-white shadow sticky top-0 z-30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center gap-4 py-4">
    
      <div className="flex items-center flex-shrink-0">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
          MV
        </div>
        <span className="ml-3 text-xl font-semibold text-gray-800">MovieHub</span>
      </div>
 
      <form className="flex-1 w-full" role="search" aria-label="Search movies">
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
       
          <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <label htmlFor="movie-search" className="sr-only">Search movies</label>
            <svg className="w-5 h-5 text-gray-400 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
            </svg>
            <input id="movie-search" onChange={(e)=>setSearch(e.target.value)} value={search} name="search" type="search" placeholder="Search movies by title..." className="w-full px-3 py-3 text-sm placeholder-gray-400 outline-none bg-transparent" />
            <button type="submit" className="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none">
              Search
            </button>
          </div>
          {/* Filters (genre, year, rating) */}
          <div className="flex gap-2 items-center">
            {/* Genre select */}
            <label htmlFor="genre" className="sr-only">Filter by genre</label>
            <select id="genre" value={genre} onChange={(e =>setGenre(e.target.value))} name="genre" className="appearance-none bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value>All genres</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Sci-Fi</option>
              <option>Animation</option>
            </select>
            {/* Year select */}
            <label htmlFor="year" className="sr-only">Filter by year</label>
            <select id="year" value={year} onChange={(e)=>setYear(e.target.value)} name="year" className="appearance-none bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value>All years</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2019</option>
              <option>2018</option>
              <option>2010s</option>
            </select>
            {/* Rating select */}
            <label htmlFor="rating" className="sr-only">Filter by rating</label>
            <select id="rating" value={rating} onChange={(e)=>setRating(e.target.value)} name="rating" className="appearance-none bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value>Any rating</option>
              <option value={9}>9+ (Top rated)</option>
              <option value={8}>8+</option>
              <option value={7}>7+</option>
              <option value={6}>6+</option>
              <option value={5}>5+</option>
            </select>
          </div>
          {/* Mobile-only Search button */}
          <button type="submit" className="sm:hidden inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
            Go
          </button>
        </div>
    
        <div className="mt-3 hidden sm:flex items-center justify-between text-xs text-gray-500">
          <div>Showing <strong className="text-gray-700">results</strong> for your query</div>
          <div className="flex items-center gap-2">
            <button type="button" className="text-gray-600 hover:text-gray-800">Reset</button>
            <button type="button" className="text-gray-600 hover:text-gray-800">Sort: Popularity</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</header>

            
        </>
    );
};

export default Header;