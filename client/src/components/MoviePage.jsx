import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

function MoviePage() {

    const [singleMovie, setSingleMovie] = useState([]);

    const { id } = useParams();

    const fetchMovie = async () => {
        const { data } = await API.fetchSingleMovie(id)

        setSingleMovie(data);
        console.log(data);
    }

    

    useEffect(() => {
        fetchMovie();
      }, []);

      return (
        <>
        <div className="movie-page">
            <div className='single-watch-section' >
                    <>
                    <div className='watch-details' >
                        <p className="watch-title">{singleMovie.original_title}</p>
                        <div className="watch-small-details">
                            <p>{singleMovie.release_date}</p>
                            <p>{singleMovie.runtime} minutes</p>
                        </div>
                        <p className="watch-overview">{singleMovie.overview}</p>
                        <div className="watch-btns">
                            <button>Play</button>
                            <button>Trailer</button>
                        </div>
                    </div>
                    <div className="watch-img">
                        <img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}></img>
                    </div>
                    </>
            </div>
        </div>
            </>
      )
}

export default MoviePage;