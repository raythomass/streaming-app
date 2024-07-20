import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TVShowPoster from "../components/TVShowPoster";
import API from "../utils/API";
const bearerKey = import.meta.env.VITE_BEARER_KEY;

function TVShows () {

    const [shows, setShows] = useState([]);

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
        .then(json => setShows(json.results))
        .catch(err => console.error('error:' + err));

        console.log(shows);
    };

    useEffect(() => {
        fetchShows()
    },[])



    return (
        <>
        <div className='homepage'>
            <h1 className="page-title"> Trending TV Shows</h1>
            <div className='movie-list'>
                {shows && shows.map((show) => (
                    <>
                    <div className='movie-teaser'>
                        <Link to={`/tvshow/${show.id}`}>
                            <TVShowPoster poster={show.poster_path} title={show.original_title}/>
                        </Link>
                    </div>
                    </>
                ))}
            </div>
        </div>
        </>
    )

}

export default TVShows;