import React from "react";
import { Link } from "react-router-dom";

function HomePage({ movies }) {
  return (
    <div>
      <h1>Movie List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "10px", width: "200px" }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
              <img src={movie.poster} alt={movie.title} width="200" />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;