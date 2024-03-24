import { useState, useEffect } from 'react';
import API from '../utils/API';

function Home () {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const { data } = API.getMovies()

        setMovies(data)
    };

    useEffect(() => {
        fetchMovies();
      }, []);

    return(
        <h1>Hello World</h1>
    )
}

export default Home;

