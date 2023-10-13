import './App.css';
import { useEffect, useState } from 'react';
import {getMovieList,searchMovie} from './api'

const App = ()=> {
  const [popularMovies, setPopularMovies] = useState([])

  // search - component search
  const search = async (q) => {
    // rate limit
    if (q.length > 3) {
      const query = await searchMovie(q)
      
      // tampung kembali ke setpopular movies
      setPopularMovies(query.results)
    }
  }

  // pertama kali running di awal kali
  useEffect( () => {
    getMovieList().then((result)=> {
      setPopularMovies(result)
    }
    )
  }, [])

  // PopularMovieList - populate dan menampung movie list
  const PopularMovieList = () => {
    return popularMovies?.map((movie,i ) => {
      return (
        <div className="movie-wrapper" key={i}>
            <div className="movie-title">{movie.title}</div>
            <img className="movie-image" alt="" src={`${process.env.REACT_APP_BASEIMGURL}/${ movie.poster_path}`}/>
            <div className="movie-date">release date: {movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  // UI
  return (
    <div className="App">
      <header className="App-header">

        <h1>Faris Movie Mania</h1>
        <input 
          placeholder='cari filmmu...' 
          className='movie-search'
          onChange={({target})=> search(target.value)}
        />

        <div className="movie-container">
          <PopularMovieList/>

        </div>      
        
      </header>
    </div>
  );
}

export default App;
