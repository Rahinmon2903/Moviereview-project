import axios from "axios";
import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { myContext } from "../Context/Context";
import Placeholder from "../Components/Placeholder";
import { Link } from "react-router-dom";
import Loading1 from "../Components/Loading1";

const Home = () => {
  const { search, year, genre, rating } = useContext(myContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);

  // ⭐ LocalStorage for user ratings
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("moviereview");
    return saved ? JSON.parse(saved) : {};
  });

  const handleRating = (id, value) => {
    const updatedRatings = { ...ratings, [id]: value };
    setRatings(updatedRatings);
    localStorage.setItem("moviereview", JSON.stringify(updatedRatings));
  };

  const API_KEY = "eb09daa8"; // Replace with your OMDb API key

  // 🔹 Infinite Scroll Logic
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 🔹 Fetch Data
  const fetchData = async (query, pageNumber) => {
    if (Loading || !query) return; // only when search text exists

    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${pageNumber}`
      );

      const newMovies = response.data.Search || [];

      // Fetch detailed info for each movie (to get Genre, Ratings, etc.)
      const movieDetails = await Promise.all(
        newMovies.map(async (movie) => {
          try {
            const details = await axios.get(
              `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
            );
            return details.data;
          } catch {
            return movie;
          }
        })
      );

      setData((prev) => [...prev, ...movieDetails]);
    } catch (error) {
      console.log("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Reset Data on Search Change
  useEffect(() => {
    setData([]);
    setPage(1);
  }, [search]);

  // 🔹 Fetch Movies when Search or Page changes
  useEffect(() => {
    if (search) {
      fetchData(search, page);
    }
  }, [search, page]);

  // 🔹 Filter Logic — Independent Filtering
  const filteredMovies = useMemo(() => {
    return data.filter((movie) => {
      const matchYear = !year || (movie.Year && movie.Year.includes(year));

      const matchGenre =
        !genre ||
        (movie.Genre &&
          movie.Genre.toLowerCase().split(", ").includes(genre.toLowerCase()));

      const matchRating =
        !rating ||
        (!isNaN(movie.imdbRating) &&
          parseFloat(movie.imdbRating) >= parseFloat(rating));

      return matchYear && matchGenre && matchRating;
    });
  }, [data, year, genre, rating]);

  return (
    <div className="relative min-h-screen p-8 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-gray-900 opacity-90 pointer-events-none" />

      {/* Placeholder if no results */}
      {filteredMovies.length === 0 && !Loading && <Placeholder />}

      {/* Movie Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 z-10">
        {filteredMovies.map((ele) => (
          <Link to={`/movies/${ele.imdbID}`} key={ele.imdbID}>
            <div className="group relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              {/* Poster */}
              <img
                src={
                  ele.Poster !== "N/A"
                    ? ele.Poster
                    : "https://i.ibb.co/5xJdm0t/movie-placeholder.jpg"
                }
                alt={ele.Title}
                onError={(e) =>
                  (e.target.src = "https://i.ibb.co/5xJdm0t/movie-placeholder.jpg")
                }
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h2 className="text-lg font-semibold truncate">{ele.Title}</h2>
                <div className="flex justify-between text-gray-300 text-sm mt-1">
                  <p>📅 {ele.Year}</p>
                  <p>⭐ {ele.imdbRating || "N/A"}</p>
                </div>
                <p className="text-gray-400 text-xs mt-1 line-clamp-1">
                  🎭 {ele.Genre}
                </p>

                {/*  10-Star Rating */}
                <div className="flex mt-2 flex-wrap gap-[2px]">
                  {[...Array(10)].map((_, index) => {
                    const star = index + 1;
                    return (
                      <span
                        key={star}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleRating(ele.imdbID, star);
                        }}
                        className={`cursor-pointer text-base sm:text-lg transition-transform duration-150 ${
                          star <= (ratings[ele.imdbID] || 0)
                            ? "text-yellow-400 scale-110 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]"
                            : "text-gray-600 hover:text-yellow-300"
                        }`}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Your Rating: {ratings[ele.imdbID] || 0}/10
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
