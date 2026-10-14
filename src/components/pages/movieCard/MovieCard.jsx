import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  return (
    <div>
      <div className="popularCard">
        <Link to={`/movieDeatils/${el.id}`}>
          <img
            width="220px"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`}
            alt=""
          />
        </Link>
        <h1>{el.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
