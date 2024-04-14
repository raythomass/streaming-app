import { useState, useEffect } from 'react';
import Movies from '../components/Movies';

function HomePage () {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY0NzQ0ZmM0YmM1MTkxMmFhYTQ2ZmVjZDk1OGQwNiIsInN1YiI6IjY1ZjUxNDA1Yjk3NDQyMDE2NGY5NGZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZbOx0atd3X7nEtWaPws8f3YenyQID1G9Hr7bbym2ek'
        }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovies(json.results))
        .catch(err => console.error('error:' + err));
    };

    console.log(movies);

    useEffect(() => {
        fetchMovies();
      }, []);

    return(
        <>
        <Movies></Movies>
        </>
    )
}

export default HomePage;

