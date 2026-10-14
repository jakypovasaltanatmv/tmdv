import React, { useEffect, useState } from "react";
import { MovieContext } from "./index";

const RootContext = ({ children }) => {
  const [lang, setLang] = useState("ru-RU");
  const [favorite, setFavorite] = useState([]);

  function getLocalFavorite() {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(res);
  }

  useEffect(() => {
    getLocalFavorite();
  }, []);

  return (
    <MovieContext.Provider value={{ favorite, setFavorite, lang, setLang }}>
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
