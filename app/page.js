
"use client";
import Header from './header';
import MovieRow from './movieRow';
import Filter from './filter';
import { useState } from 'react';
import { initialMovieList } from './data.js';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(initialMovieList);
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearch(text) {
    console.log(text);
    setSearchText(text);
    const filtered = initialMovieList.filter(movie =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
    setCurrentPage(1);
  }

  const MoviesPerPage = 6;
  const totalPages = Math.ceil(filteredMovies.length / MoviesPerPage);

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const startIndex = (currentPage - 1) * MoviesPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, startIndex + MoviesPerPage);

  return (
    <>
      <Header
        handleSearch={handleSearch}
        searchText={searchText}
      />
      <div className="container">
        <div className='row'>
          <div className='col-lg-3'>
            <Filter
            />
          </div>
          <div className='col-lg-9 col'>
            <div className='row'>
              {paginatedMovies.map((movie) => (
                <MovieRow key={movie.id} movie={movie}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}

export default Home;