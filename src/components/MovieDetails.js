import React from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";


export default function MovieDetails() {
  const {text,setText} = useContext(MyContext);
  // console.log(text);

  return (
    <div>
      <h1>Movie Details page</h1>
      <h1>{text}</h1>
      <button onClick={()=>setText("Text Changed from Movie details page")}>Change value</button>
    </div>
  );
}
