import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../../apikey";
import MovieCard from "../movieCard/MovieCard";
import { useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState([]);
  const { kinoName } = useParams();

  async function getSearch(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${kinoName}`,
    );
    //console.log(res.data.results);
    setSearch(res.data.results);
  }

  useEffect(() => {
    getSearch(API_KEY);
  }, [kinoName]);

  return (
    <div id="search">
      <div className="container">
        <div className="popular">
          {search.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
