import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { myContext } from "../Context/Context";
import sampleImages from "../Images/sampleImages";


const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search] = useContext(myContext);

  useEffect(() => {
    setData([]);
    setPage(1);
  }, [search]);

  useEffect(() => {
    fetchdata(search, page);
  }, [page, search]);

  const fetchdata = async (query, pageNumber) => {
    try {
      if (!query) return;
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=80440b73&s=${query}&page=${pageNumber}`
      );
      const newMovies = response.data.Search || [];
      setData((prev) => [...prev, ...newMovies]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {data.length === 0 && (
        <div className="flex justify-center items-center flex-wrap gap-6">
         <Placeholder />
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.map((ele, index) => (
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
