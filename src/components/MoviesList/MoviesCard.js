import React from "react";
import styles from "./moviescard.module.css";
import movieImage from "./download.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updateText } from "../../store/actions/textActions";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text = useSelector((state)=>state.text.text);
  return (
    <div className={styles.movie_card}>
      <img src={movieImage} alt="movieImage" />
      <h3>{movie.title}</h3>
      <div>value from reducer: <span style={{color:"red"}}>{text}</span></div>
      <button onClick={()=>dispatch(updateText("New text"))}>Update Redux store state</button>
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
