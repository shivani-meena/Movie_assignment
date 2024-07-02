import React from 'react';
import Select from 'react-select';
import './filter.css';

function Filter({year, rating, selectedGenres, setYear, setRating, setSelectedGenres}) {
  const genreOptions = [
    { value: 'Action', label: 'Action' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Romance', label: 'Romance' }
  ];

  return (
    <div className="filter">
      <div className='filter-text'>Filters</div>
      <label>
        <div className='font-size year'>Year:</div>
        <input
          className="filter-input"
          type="number"
          value={year}
          onChange={(e) => {
            setYear(e.target.value || '');
          }}
        />
      </label>
      <label>
        <div className='font-size'>Rating:</div>
        <input
          className="filter-input"
          type="number"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value || '');
          }}
        />
      </label>
      <div className='font-size'>Genres:</div>
      <Select
        className="filter-input"
        placeholder="Select genres..."
        isMulti
        options={genreOptions}
        value={selectedGenres}
        onChange={(selected) => {
          setSelectedGenres(selected || []);
        }}
      />
    </div>
  );
}

export default Filter;
