import React from 'react';
import './header.css';

function Header({ handleSearch }) {
    return (
        <div className='container'>
            <div className="row header-row">
                <img className="header-img" src="Vector.png" alt="logo" />
                Movies Collection
                <input 
                    className='input-text' 
                    onChange={(e) => handleSearch(e.target.value)} 
                    placeholder='Enter Keywords....'
                />
            </div>
            <hr className='hr' />
        </div>
    )
}

export default Header;
