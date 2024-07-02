import React from 'react';
import './header.css';

function Header({ handleSearch, searchText }) {
    return (
        <div className='container'>
            <div className="row header-row">
                <img className="header-img" src="Vector.png" alt="logo" />Movie Catelog
                <input 
                    className='input-text' 
                    searchText ={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder='Enter Keywords....'
                />
            </div>
            <hr className='hr' />
        </div>
    )
}
export default Header;
