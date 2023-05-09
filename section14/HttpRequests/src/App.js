import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  
  // fetch는 promise객체(비동기)를 반환
  // async await를 사용하면 then을 사용하지 않아도 돼서 가독성이 높아짐
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      if (!response.ok) {
        throw new Error('Something went wrong!'); 
      }
      const data = await response.json();
      
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_data
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    } 
    setIsLoading(false);
  }, []);

  useEffect(() =>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {  
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>;   
  }
  if (isLoading) {
    content = <p>Loading...</p>;  
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
