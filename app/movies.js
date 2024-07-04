function Movies({ movie }) {
    return (
        <div className="row col2">
            <div className="image-div col-lg-4">
                <img className="image" src={movie.poster} />
            </div>
            <div  className="col-lg-8 description">
                <h4 className="title">{movie.title}</h4>
                <div className="plot">{movie.plot.slice(0,500)}...</div>
                <div  className="font-plot">Release Year: {movie.release_year} | Imdb Rating: {movie.imdb_rating} | Rating Count: {movie.rating_count}</div>
                <div className="font-plot">Genres: {movie.genres} | Director: {movie.directors}</div>
            </div>
        </div>
    );
}
export default Movies;


































// function Movie_row({ movie }) {
//     console.log(movie);
//     return (
//             <div className="image-div">
//                 <div className="col-lg-8 col2">
//                 <img className="image" src=""/>
//                 <div className="font plot"></div>

//                 </div>
//                 <div className="col-lg-4 col2">
//                 <h4 className=" title"></h4>
//                 <div className="font plot"></div>
//                  </div>
//             </div>
            
//     );
// }
// export default Movie_row;









