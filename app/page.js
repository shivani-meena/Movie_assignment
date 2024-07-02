"use client";
import React, { useState, useEffect } from 'react';
import Header from './header';
import Filter from './filter';
import MovieRow from './movieRow';
import { initialMovieList } from './data.js';
import Register from './register';
import Pagination from './pagination';

const MoviesPerPage = 6;

function Home() {
  const [filteredMovies, setFilteredMovies] = useState(initialMovieList);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  function filterMovies() {
    const filtered = initialMovieList.filter(movie => {
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
        handleSearch={(text) => {
          setSearchText(text.toLowerCase());
        }}
        searchText={searchText}
      />
      <div className="container">
        <div className='row'>
          <div className='col-lg-3'>
            <Filter
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
      <Register />
    </>
  );
}

export default Home;
