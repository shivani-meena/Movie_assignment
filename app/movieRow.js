
function Movie_row({ movie }) {
    console.log(movie);
    return (
        <div className="col-lg-6 col2">
            <div className="image-div">
                <img className="image" src={movie.poster} />
            </div>
            <h4 className=" title">{movie.title}</h4>
            <div className="font plot">{movie.genres} | {movie.release_year}</div>
            <div className="font plot">{movie.plot}</div>
        </div>
    );
}
export default Movie_row;