"use client";
import Header from './header';
import MovieRow from './movieRow';
import Filter from './filter';
import { useState } from 'react';
import { initialMovieList } from './data.js';

function Home() {
  const [filteredMovies, setFilteredMovies] = useState(initialMovieList);
  // console.log(initialMovieList);
  console.log("shivani");

  function handleSearch(searchText) {
    let filteredMovies = initialMovieList.filter(movie =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className="container">
        <div className='row'>
          <div className='col-lg-3 '>
            <Filter />
          </div>
          <div className='col-lg-9 col'>
            <div className='row'>
              {filteredMovies.map((movie) => (
                <MovieRow key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
