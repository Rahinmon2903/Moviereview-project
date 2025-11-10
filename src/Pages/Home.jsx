import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { myContext } from "../Context/Context";
import Placeholder from "../Components/Placeholder";

const Home = () => {
  const { search, year, genre,rating } = useContext(myContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setData([]);
    setPage(1);
  }, [search]);


  useEffect(() => {
    fetchData(search, page);
  }, [page, search]);


  const fetchData = async (query, pageNumber) => {
    try {
      if (!query) return;

 
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=80440b73&s=${query}&page=${pageNumber}`
      );
      const newMovies = response.data.Search || [];

   
      const movieDetails = await Promise.all(
        newMovies.map(async (movie) => {
          const details = await axios.get(
           
            `https://www.omdbapi.com/?apikey=80440b73&i=${movie.imdbID}`
          );
          return details.data;
        })
      );


      setData((prev) => [...prev, ...movieDetails]);
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };

  const filteredMovies = data.filter((movie) => {
    const matchYear = year === "" || movie.Year === year;
    const matchGenre =
      genre === "" || (movie.Genre && movie.Genre.includes(genre));
      const matchrating = rating === "" || (movie.imdbRating && movie.imdbRating.includes(rating));
    return matchYear && matchGenre && matchrating;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
 
      {filteredMovies.length === 0 && <Placeholder />}

 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMovies.map((ele, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={
                ele.Poster !== "N/A"
                  ? ele.Poster
                  : "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg"
              }
              alt={ele.Title}
              className="w-full h-72 object-cover rounded-md"
              onError={(e) =>
                (e.target.src =
                  "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg")
              }
            />
            <h2 className="mt-3 text-lg font-semibold">{ele.Title}</h2>
            <p className="text-gray-600 text-sm">📅 {ele.Year}</p>
            <p className="text-gray-500 text-sm mt-1">🎭 {ele.Genre}</p>
          </div>
        ))}
      </div>

   
      {data.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
