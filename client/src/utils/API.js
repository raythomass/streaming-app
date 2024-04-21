import axios from 'axios';

const fetchSingleMovie = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6364744fc4bc51912aaa46fecd958d06`)
}

const fetchSingleShow = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=6364744fc4bc51912aaa46fecd958d06`)
}


export default {
    fetchSingleMovie,
    fetchSingleShow
}