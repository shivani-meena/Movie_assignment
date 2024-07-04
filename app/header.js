import React from 'react';
import './header.css';
function Header({ handleSearch, searchText, handleLogout }) {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className='col-md-6 order-md-1'>
                        <div className='image-box'>
                            <img className="header-img" src="Vector.png" alt="logo" />
                            <span className='movie-text'>Movie Catalog</span>
                        </div>
                    </div>
                    <div className='col-md-6 order-md-2 text-end'>
                        <div className='input'>
                            <input className='input-text' value={searchText} onChange={(e) => handleSearch(e.target.value)} placeholder='Enter Keywords...' />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleLogout}>Logout</button>
            <hr className='hr' />
        </>
    )
}
export default Header;
