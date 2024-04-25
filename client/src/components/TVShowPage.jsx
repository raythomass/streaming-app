import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

function TVShowPage() {

    const [singleShow, setSingleShow] = useState([]);

    const { id } = useParams();

    const fetchShow = async () => {
        const { data } = await API.fetchSingleShow(id)

        setSingleShow(data);
        console.log(data);
    }

    

    useEffect(() => {
        fetchShow();
      }, []);
      
      return (
        <>
        {/* <h1>Hello Movie Page</h1> */}
        <div className='single-movie-section'>
            <>
            <div className='movie-details' >
                <p className="movie-title">{singleShow.name}</p>
                <div className="movie-small-details">
                    <p>Seasons: {singleShow.number_of_seasons}</p>
                    <p>Episodes: {singleShow.number_of_episodes}</p>
                </div>
                <p className="movie-overview">{singleShow.overview}</p>
                <div className="movie-btns">
                    <button>Play</button>
                    <button>Trailer</button>
                </div>
            </div>
            <div className="movie-img">
                <img className="single-movie-img" src={`https://image.tmdb.org/t/p/w500${singleShow.poster_path}`}></img>
            </div>
            </>
        </div>
        <div className="show-seasons">
            {singleShow.seasons?.map((season) => (
                <>
                <p className="season-name">{season.name}</p>
                <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}></img>
                </>
            ))}
        </div>
        </>
      )
}

export default TVShowPage;