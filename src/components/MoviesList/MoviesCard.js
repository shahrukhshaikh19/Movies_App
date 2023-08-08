import React from "react";
import styles from "./moviescard.module.css";
import movieImage from "./download.jpg";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className={styles.movie_card}>
      <img src={movieImage} alt="movieImage" />
      <h3>{movie.title}</h3>
      <p>
        <strong>Release Date : {movie.release_date}</strong>
      </p>
      <div className={styles.btnWrapper}>
        <button>Shortlist</button>
        <button onClick={() => navigate("/moviedetails")}>View Details</button>
      </div>
    </div>
  );
}
