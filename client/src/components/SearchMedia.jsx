import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

function SearchMedia () {

        const [singleMovie, setSingleMovie] = useState([]);
        const [singleShow, setSingleShow] = useState([]);
    
        const { id } = useParams();
    
        const fetchMovie = async () => {
            const { data } = await API.fetchSingleMovie(id)
    
            setSingleMovie(data);
            console.log(data);
        };

        const fetchShow = async () => {
            const { data } = await API.fetchSingleShow(id)
    
            setSingleShow(data);
            console.log(data);
        }
    
        
    
        useEffect(() => {
            fetchMovie();
            fetchShow();
          }, []);
    
          return (
            <>
            <div className="">
                <div className='' >
                    {singleShow.number_of_seasons ? (
                       <>
                       <div className='' >
                            <p className="">{singleShow.original_title}</p>
                            <div className="">
                                <p>{singleShow.release_date}</p>
                                <p>{singleShow.runtime} minutes</p>
                            </div>
                            <p className="">{singleShow.overview}</p>
                            <div className="">
                                <button>Play</button>
                                <button>Trailer</button>
                            </div>
                        </div>
                        <div className="watch-img">
                            <img src={`https://image.tmdb.org/t/p/w500${singleShow.poster_path}`}></img>
                        </div>
                       </> 
                    ) : (
                        <>
                        <div className='' >
                            <p className="">{singleMovie.original_title}</p>
                            <div className="">
                                <p>{singleMovie.release_date}</p>
                                <p>{singleMovie.runtime} minutes</p>
                            </div>
                            <p className="">{singleMovie.overview}</p>
                            <div className="">
                                <button>Play</button>
                                <button>Trailer</button>
                            </div>
                        </div>
                        <div className="watch-img">
                            <img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}></img>
                        </div>
                        </>

                    )}
                </div>
            </div>
                </>
          )
    }


export default SearchMedia;