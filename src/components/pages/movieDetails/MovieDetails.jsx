import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../../apikey";
import "./MovieDetails.css";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Actors from "../actors/Actors";
import Videos from "../video/Videos";
import { MovieContext } from "../../../context";

const MovieDetails = () => {
  const [movieDeatils, setMovieDeatils] = useState({});
  const { movieId } = useParams();
  const { setFavorite } = useContext(MovieContext);
  //  console.log(movieDeatils);

  function addToFavorite(item) {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    let result = [...res, item];
    setFavorite(result);
    localStorage.setItem("favorite", JSON.stringify(result));
  }

  async function getMovieDetails(key) {
    let str = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    );
    setMovieDeatils(str.data);
  }

  useEffect(() => {
    getMovieDetails(API_KEY);
  }, []);

  return (
    <>
      <div
        id="movieDetails"
        style={{
          background: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/qeQJx07rK2xm8SD2sJxFKhE7gs0.jpg") center center / cover`,
        }}
      >
        <div className="container">
          <div className="movieDetails">
            <img
              width="220px"
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movieDeatils.poster_path}`}
              alt=""
            />
            <div className="movieDetailsText">
              <h1>
                {movieDeatils.original_title} (
                {movieDeatils.release_date?.slice(0, 4)})
              </h1>
              <p>
                {movieDeatils.release_date}
                <span>{movieDeatils.genres?.map((el) => el.name)}</span>
                {movieDeatils.runtime}
              </p>
              <div className="movieDeatilsIcon">
                <MdFavoriteBorder onClick={() => addToFavorite(movieDeatils)} />
                <IoMenu />
              </div>
              <h2>{movieDeatils.tagline}</h2>
              <h1>Обзор</h1>
              <p>{movieDeatils.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <Actors actorsId={movieId} />
      <Videos videoId={movieId} />
    </>
  );
};

export default MovieDetails;
