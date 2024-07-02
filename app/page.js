"use client";
import React, { useState, useEffect } from 'react';
import { fullMovieList } from './data.js';
import Header from './header';
import Filter from './filter';
import MovieRow from './movieRow';
// import Register from './register';
import Pagination from './pagination';

function Home() {
  const [filteredMovies, setFilteredMovies] = useState(fullMovieList);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  function filterMovies() {
    const filtered = fullMovieList.filter(movie => {
      const matchesSearchText = movie.title.toLowerCase().includes(searchText);
      const matchesYear = year ? movie.release_year === parseInt(year) : true;
      const matchesRating = rating ? movie.imdb_rating >= parseFloat(rating) : true;
      const matchesGenres = selectedGenres.length ? selectedGenres.every(genre => movie.genres.split('|').includes(genre.value)) : true;

      return matchesSearchText && matchesYear && matchesRating && matchesGenres;
    });

    setFilteredMovies(filtered);
    setCurrentPage(1);
  }

  useEffect(() => {
    filterMovies();
  }, [searchText, year, rating, selectedGenres]);

  function handleSearch(text) {
    setSearchText(text.toLowerCase());
  }

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

  const MoviesPerPage = 6;
  const totalPages = Math.ceil(filteredMovies.length / MoviesPerPage);
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
              year={year}
              rating={rating}
              selectedGenres={selectedGenres}
              setYear={setYear}
              setRating={setRating}
              setSelectedGenres={setSelectedGenres}
            />
          </div>
          <div className='col-lg-9'>
            {paginatedMovies.map((movie, index) => (
              <MovieRow key={index} movie={movie} />
            ))}
          </div>
        </div>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}

export default Home;
