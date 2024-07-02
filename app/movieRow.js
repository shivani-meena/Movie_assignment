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









