import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../utils/API";

function MoviePage() {

    const [singleMovie, setSingleMovie] = useState([]);

    const { id } = useParams();

    const fetchMovie = async () => {
        const movieData = await API.fetchSingleMovie(id);

        setSingleMovie(movieData)
        console.log(movieData)
    };

    useEffect(() => {
        fetchMovie();
      }, []);

      return (
        <>
        <div className='movie-list'>
                {singleMovie?.map((singleMovie) => (
                    <>
                    <div className='movie-details'>
                        <h1>{singleMovie.orignal_title}</h1>
                    </div>
                    </>
                ))}
            </div></>
      )
}

export default MoviePage;