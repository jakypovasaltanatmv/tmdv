import React, { useContext, useState } from "react";
import headerImg from "../../../assets/img/headerLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaSun } from "react-icons/fa";
import "./Header.css";
import { MovieContext } from "../../../context";

const Header = () => {
  const nav = useNavigate();
  const [movieName, setMovieName] = useState("");
  const { setLang } = useContext(MovieContext);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="left">
            <Link to="/">
              <img width="200px" src={headerImg} alt="" />
            </Link>
            <Link to="/popular">Популярные</Link>
            <Link to="/topRated">Топ рейтинг</Link>
            <Link to="/favorite">Избранное</Link>
          </div>
          <div className="rigth">
            <FaSun />
            <select onChange={(e) => setLang(e.target.value)}>
              <option value="RU">RU</option>
              <option value="EN">EN</option>
            </select>
            <a onClick={() => nav(`/search/${movieName}`)}>
              <FaSearch />
            </a>
            <input
              type="text"
              placeholder="Найти фильм, сериал.."
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
