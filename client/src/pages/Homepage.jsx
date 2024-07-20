import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviePoster from '../components/MoviePoster';
const bearerKey = import.meta.env.VITE_BEARER_KEY;


function HomePage () {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${bearerKey}`
        }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovies(json.results))
        .catch(err => console.error('error:' + err));

        console.log(movies);
    };

    useEffect(() => {
        fetchMovies();
      }, []);

    return(
        <>
        {/* <h1>Hello World</h1> */}
        <div className='homepage'>
            <h1 className='page-title'> Trending Movies</h1>
            <div className='movie-list'>
                {movies.map((movie) => (
                    <>
                    <div className='movie-teaser'>
                        <Link to={`/MoviePage/${movie.id}`}>
                            <MoviePoster poster={movie.poster_path} title={movie.title}/>
                        </Link>
                    </div>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}

export default HomePage;

