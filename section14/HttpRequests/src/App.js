import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
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
      const response = await fetch('https://react-http-985cd-default-rtdb.firebaseio.com/movies.json')
      if (!response.ok) {
        throw new Error('Something went wrong!'); 
      }
      const data = await response.json();
      
      const loadedMovies = [];  

      for(const key in data) {
        loadedMovies.push({
          id: key, 
          title: data[key].title, 
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate ,
        })
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    } 
    setIsLoading(false);
  }, []);

  useEffect(() =>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-985cd-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json(); 
    console.log(data)
  }

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
