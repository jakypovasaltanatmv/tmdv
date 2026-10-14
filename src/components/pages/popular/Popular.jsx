import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../../apikey";
import "./Popular.css";
import MovieCard from "../movieCard/MovieCard";
import { MovieContext } from "../../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const { lang } = useContext(MovieContext);

  async function getPopular(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${lang}&page=1`,
    );
    //console.log(res.data.results);
    setPopular(res.data.results);
  }

  useEffect(() => {
    getPopular(API_KEY);
  }, [lang]);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
