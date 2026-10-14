import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/hpBGCnzOvdtQoMyE48gvwp2y5yx.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "500px",
      }}
    >
      <h1>Добро пожаловать.</h1>
      <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
    </div>
  );
};

export default Home;
