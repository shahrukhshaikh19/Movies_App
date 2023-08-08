import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList/MoviesList";

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    // Call the function to fetch popular movies
    fetchPopularMovies(2);
  }, []);

  const apiKey = "b598177a76e2f48e0a20a74026f3fcae";
  const baseUrl = "https://api.themoviedb.org/3";
  const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${apiKey}`;

  async function fetchPopularMovies(pageNumber) {
    try {
      const response = await fetch(`${popularMoviesUrl}&page=${pageNumber}`);
      // console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Process the list of movies here (e.g., display them on the page)
      setMoviesData(data.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <div>
      <h1>Movies List</h1>
      <p style={{color:"red"}}>Welcome to our website!</p>
      <MoviesList data={moviesData} />
    </div>
  );
}
