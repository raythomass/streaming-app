import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
        {/* <h1>Hello Movie Page</h1> */}
        <div className='single-movie-section'>
                    <>
                    <div className='movie-details' >
                        <p className="movie-title">{singleMovie.original_title}</p>
                        <p className="movie-tagline">{singleMovie.overview}</p>
                        <p className="movie-runtime">{singleMovie.runtime} minutes</p>
                    </div>
                    <div>
                        <img className="single-movie-img" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}></img>
                    </div>
                    </>
            </div></>
      )
}

export default MoviePage;