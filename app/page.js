import Header from './header';
import MovieRow from './movieRow';
import Filter from './filter';
import { initialMovieList } from './data.js';

function Home() {
  // console.log(initialMovieList);
  console.log("shivani");

  return (
    <>
      <Header />
      <div className="container">
        <div className='row'>
          <div className='col-lg-3 '>
            <Filter />
          </div>
          <div className='col-lg-9 col'>
            <div className='row'>
              {initialMovieList.map((movie) => (
                <MovieRow key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
