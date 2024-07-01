"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import './filter.css';


function Filter() {
    const [selectedGenre, setselectedGenre] = useState([]);

    const genreOptions = [
        { value: 'action', label: 'Action' },
        { value: 'sci-fi', label: 'Sci-Fi' },
        { value: 'drama', label: 'Drama' },
        { value: 'thriller', label: 'Thriller' },
        { value: 'animation', label: 'Animation' },
        { value: 'romance', label: 'Romance' },
        { value: 'war', label: 'War' }
    ];

    const handleGenreChange = (selectedOptions) => {
        setselectedGenre(selectedOptions);
    };

    return (
        <div className="filter">
            <label>
                <span className='font-size'>Genre:</span>
                <select className="genre">
                    <option value="">All</option>
                    <option value="Action">Action</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Animation">Animation</option>
                    <option value="Romance">Romance</option>
                    <option value="War">War</option>
                </select>
            </label>
            <label>
            <span className='font-size year'>Year:</span>
            <input className="width" type="number" />
            </label>
            <label>
            <span className='font-size'>Rating:</span>
            <input className="width" type="number" />
            </label>
            <span className='font-size '>Dropdown:</span>
            <Select
                className="width dropdown-label"
                options={genreOptions}
                value={selectedGenre}
                onChange={handleGenreChange}
                placeholder="Select genres..."
                isMulti
            />
            {/* <p>Selected genres: {selectedCustomers.map(customer => customer.label).join(', ')}</p> */}
        </div>
    );
}

export default Filter;
