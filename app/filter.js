import React from 'react';
import Select from 'react-select';
import './filter.css';

function Filter({handleFilters}) {
 

  return (
    <div className="filter">
      <label>
        <span className='font-size year'>Year:</span>
        <input className="width" type="number"/>
      </label>
      <label>
        <span className='font-size'>Rating:</span>
        <input className="width" type="number" />
      </label>
      <span className='font-size'>Genres:</span>
      <Select
        className="width"
        options={genreOptions}
        placeholder="Select genres..."
        isMulti
      />
    </div>
  );
}

export default Filter;
