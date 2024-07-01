import './header.css';

function Header() {
    return (
        <div className='container'>
            <div className="row header-row ">
                <img className="header-img" src="Vector.png" />
                Movies App
                <input className='input-text' />
            </div>
            <hr className='hr'></hr>
        </div>
    )
}
export default Header;
