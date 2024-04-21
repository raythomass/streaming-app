import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TVShowPoster from "../components/TVShowPoster";

function TVShows () {

    const [shows, setShows] = useState([]);

    const fetchShows = async () => {
        const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY0NzQ0ZmM0YmM1MTkxMmFhYTQ2ZmVjZDk1OGQwNiIsInN1YiI6IjY1ZjUxNDA1Yjk3NDQyMDE2NGY5NGZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZbOx0atd3X7nEtWaPws8f3YenyQID1G9Hr7bbym2ek'
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
        {/* <h1>Hello World</h1> */}
        <div className='homepage'>
            <h1> TV Shows</h1>
            <div className='movie-list'>
                {shows.map((show) => (
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