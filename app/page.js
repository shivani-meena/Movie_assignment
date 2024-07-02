"use client";
import React, { useState, useEffect } from 'react';
import Header from './header';
import MovieRow from './movieRow';
import Select from 'react-select';
import { initialMovieList } from './data.js';

const MoviesPerPage = 6;

function Home() {
  const [searchText, setSearchText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(initialMovieList);
  const [currentPage, setCurrentPage] = useState(1);
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    filterMovies();
  }, [searchText, year, rating]);

  function test() {
    console.log(year);
  }


  function handleSearch(text) {
    setSearchText(text.toLowerCase());
    setCurrentPage(1);
  }
  console.log("abcd");

  function filterMovies() {
    alert("alert filterMovies");
    const filtered = initialMovieList.filter(movie => {
      const matchesSearchText = movie.title.toLowerCase().includes(searchText);
      const matchesYear = year ? movie.year === parseInt(year) : true;
      const matchesRating = rating ? movie.rating >= parseFloat(rating) : true;
      return matchesSearchText && matchesYear && matchesRating;
    });
    setFilteredMovies(filtered);
  }

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
            <div className="filter">
              <div className='filter-text'>Filters</div>
              <label>
                <div className='font-size year'>Year:</div>
                <input className="filter-input" type="number" year={year} onChange={(e) => test(e.target.value)} />
              </label>
              <label>
                <div className='font-size year'>Year:</div>
                <input className="filter-input" type="number" value={year} onChange={(e) => setYear(e.target.value)} />
              </label>
              <label>
                <div className='font-size'>Rating:</div>
                <input className="filter-input" type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
              </label>
              <div className='font-size'>Genres:</div>
              <Select
                className="filter-input"
                placeholder="Select genres..."
                isMulti
              />
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='row'>
              {paginatedMovies.map((movie, index) => (
                <MovieRow key={index} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}
export default Home;


