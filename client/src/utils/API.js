import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

const fetchSingleMovie = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
}

const fetchSingleShow = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)
}


export default {
    fetchSingleMovie,
    fetchSingleShow
}