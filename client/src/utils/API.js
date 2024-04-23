import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
const bearerKey = import.meta.env.VITE_BEARER_KEY;

const fetchShows = async () => {
    const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${bearerKey}`
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json.results))
    .catch(err => console.error('error:' + err));

};

// const fetchShows = async () => {
//     return axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
// }

const fetchSingleMovie = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
}

const fetchSingleShow = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)
}


export default {
    fetchSingleMovie,
    fetchShows,
    fetchSingleShow
}