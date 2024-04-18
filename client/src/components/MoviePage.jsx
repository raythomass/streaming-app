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
        console.log(singleMovie);
    }

    

    useEffect(() => {
        fetchMovie();
      }, []);

      return (
        <>
        <h1>Hello Movie Page</h1>
        <div className='movie-list'>
                    <>
                    <div className='movie-details'>
                        <h1>{singleMovie.original_title}</h1>
                    </div>
                    </>
            </div></>
      )
}

export default MoviePage;