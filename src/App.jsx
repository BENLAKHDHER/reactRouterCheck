import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetails from "./MovieDetails";

const movies = [
  {
    id: 1,
    title: "Inception",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    description:
      "A skilled thief who steals secrets through the use of dreams is given a chance to erase his criminal past.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0", // Inception Trailer
  },
  {
    id: 2,
    title: "The Dark Knight",
    poster:
      "https://image.tmdb.org/t/p/original/eP5NL7ZlGoW9tE9qnCdHpOLH1Ke.jpg",
    description:
      "Batman sets out to stop the Joker's chaotic reign of terror in Gotham City.",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY", // The Dark Knight Trailer
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;