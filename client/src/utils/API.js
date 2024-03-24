import axios from 'axios';

const getMovies = () => {
    return axios.get('https://api.themoviedb.org/3/search/movie?query=toy%20story&include_adult=false&language=en-US&page=1');
};

export default {
    getMovies
};