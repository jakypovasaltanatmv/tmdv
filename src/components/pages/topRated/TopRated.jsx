import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../../apikey";
import MovieCard from "../movieCard/MovieCard";
import { MovieContext } from "../../../context";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { lang } = useContext(MovieContext);

  async function getTopRated(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${lang}&page=1`,
    );
    //console.log(res.data.results);
    setTopRated(res.data.results);
  }

  useEffect(() => {
    getTopRated(API_KEY);
  }, [lang]);

  return (
    <div id="TopRated">
      <div className="container">
        <div className="popular">
          {topRated.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
