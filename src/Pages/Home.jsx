import axios from "axios";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { myContext } from "../Context/Context";
import Placeholder from "../Components/Placeholder";
import { Link } from "react-router-dom";
import Loading1 from "../Components/Loading1";

const Home = () => {
  const { search, year, genre, rating } = useContext(myContext);
  const [data, setData] = useState([]); //step 1 for fetching data from API
  const [page, setPage] = useState(1); 
  const [Loading, setLoading] = useState(false);

  // ⭐ Load and store user ratings in localStorage
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("moviereview");
    return saved ? JSON.parse(saved) : {};
  });

  // ⭐ Update rating function
  const handleRating = (id, value) => {
    const updatedRatings = { ...ratings, [id]: value };
    setRatings(updatedRatings);
    localStorage.setItem("moviereview", JSON.stringify(updatedRatings));
  };

  // Reset movie data when search changes
  useEffect(() => {
    setData([]);
    setPage(1);
  }, [search]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }, []);

  // Attach and clean scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Fetch data on search or page change
  useEffect(() => {
    if (search) fetchData(search, page);
  }, [page, search]);

  const API_KEY = "eb09daa8"; // 🔑 Your OMDB API key

  const fetchData = async (query, pageNumber) => {
    if (Loading || !query) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${pageNumber}`
      );

      const newMovies = response.data.Search || [];

      const movieDetails = await Promise.all(
        newMovies.map(async (movie) => {
          const details = await axios.get(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
          );
          return details.data;
        })
      );

      setData((prev) => [...prev, ...movieDetails]);
    } catch (error) {
      console.log("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Apply filters
  const filteredMovies = data.filter((movie) => {
    const matchYear = year === "" || movie.Year === year;
    const matchGenre =
      genre === "" || (movie.Genre && movie.Genre.includes(genre));
    const matchrating =
      rating === "" || (movie.imdbRating && movie.imdbRating.includes(rating));
    return matchYear && matchGenre && matchrating;
  });

  return (
    <div className="relative min-h-screen p-8 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-gray-900 opacity-90 pointer-events-none" />

      {filteredMovies.length === 0 && <Placeholder />}

      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 z-10">
        {filteredMovies.map((ele) => (
          <Link to={`/movies/${ele.imdbID}`} key={ele.imdbID}>
            <div className="group relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <img
                src={
                  ele.Poster !== "N/A"
                    ? ele.Poster
                    : "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg"
                }
                alt={ele.Title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h2 className="text-lg font-semibold truncate">{ele.Title}</h2>
                <div className="flex justify-between text-gray-300 text-sm mt-1">
                  <p>📅 {ele.Year}</p>
                  <p>⭐ {ele.imdbRating || "N/A"}</p>
                </div>
                <p className="text-gray-400 text-xs mt-1 line-clamp-1">
                  🎭 {ele.Genre}
                </p>

                {/* ⭐ Star Rating */}
                <div className="flex mt-2 space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent Link click

                        e.stopPropagation(); // stop Link navigation
                        handleRating(ele.imdbID, star);
                      }}
                      className={`cursor-pointer text-lg transition-all ${star <= (ratings[ele.imdbID] || 0)
                          ? "text-yellow-400 scale-110"
                          : "text-gray-500 hover:text-yellow-300"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Your Rating: {ratings[ele.imdbID] || 0}/5
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Loading Spinner */}
      {Loading && <Loading1 />}
    </div>
  );
};

export default Home;
