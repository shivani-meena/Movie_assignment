"use client";
import Select from 'react-select';
import './filter.css';


function Filter() {

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
            <span className='font-size year'>Year:</span>
            <input className="width" type="number" />
            </label>
            <label>
            <span className='font-size'>Rating:</span>
            <input className="width" type="number" />
            </label>
            <span className='font-size '>Dropdown:</span>
            <Select
                className="width "
                options={genreOptions}
                onChange={handleGenreChange}
                placeholder="Select genres..."
                isMulti
            />
            {/* <p>Selected genres: {selectedCustomers.map(customer => customer.label).join(', ')}</p> */}
        </div>
    );
}

export default Filter;
