import React, { useEffect, useState } from "react";
import { API_KEY } from "../../../apikey";
import axios from "axios";
import "./Videos.css";

const Videos = ({ videoId }) => {
  const [videos, setVideos] = useState([]);

  async function getVideos(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${key}&language=en-US`,
    );
    console.log(res);
    setVideos(res.data.results);
  }

  useEffect(() => {
    getVideos(API_KEY);
  }, []);

  return (
    <div id="videos">
      <div className="container">
        <div className="videos">
          {videos.slice(0, 3).map((el) => (
            <iframe
              width="419"
              height="217"
              src={`https://www.youtube.com/embed/${el.key}`}
              title="Человек-Паук: Новый день — Русский трейлер 2 (4K Дубляж, 2026) Том Холланд"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
