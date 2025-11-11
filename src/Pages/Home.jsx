import axios from "axios";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { myContext } from "../Context/Context";
import Placeholder from "../Components/Placeholder";
import { Link } from "react-router-dom";
import Loading1 from "../Components/Loading1";

const Home = () => {
  const { search, year, genre, rating } = useContext(myContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);
  const[rating1,setRating]=useState(()=>{
    const saved = localStorage.getItem("moviereview");
    return saved ? JSON.parse(saved) : {} ;
  })

  const updateRating=(id,value)=>{
    const updatedValue= {...rating1,[id]:value};
    setRating(updatedValue);
    localStorage.setItem("moviereview",JSON.stringify(updatedValue));


  }

  useEffect(() => {
    setData([]);
    setPage(1);
  }, [search]);

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

  useEffect(() => {
    if (search) fetchData(search, page);
  }, [page, search]);

  const fetchData = async (query, pageNumber) => {
    if (Loading || !query) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=eb09daa8&s=${query}&page=${pageNumber}`
      );

      const newMovies = response.data.Search || [];

      const movieDetails = await Promise.all(
        newMovies.map(async (movie) => {
          const details = await axios.get(
            `https://www.omdbapi.com/?apikey=eb09daa8&i=${movie.imdbID}`
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
        {filteredMovies.map((ele, index) => (
          <Link to={`/movies/${ele.imdbID}`} key={index}>
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
              </div>
            </div>
          </Link>
        ))}
      </div>

      {Loading && 
       <Loading1/>
      }
    </div>
  );
};

export default Home;
