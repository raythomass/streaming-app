import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

function SearchMedia () {

        const [singleMovie, setSingleMovie] = useState([]);
        const [singleShow, setSingleShow] = useState([]);
        const [singleSeason, setSingleSeason] = useState([]);
    
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

        const fetchSeason = async () => {
            const {data} = await API.fetchSingleSeason(id, seasonID)
    
            setSingleSeason(data);
            console.log(data);
        }
    
        
    
        useEffect(() => {
            fetchMovie();
            fetchShow();
            fetchSeason();
          }, []);
    
          return (
            <>
            <div className="search-media-page">
                <div className='search-media-container' >
                    {singleShow.number_of_seasons ? (
                       <>
                       <div className="tv-page">
                            <div className='single-watch-section'>
                                <div className='watch-details' >
                                    <p className="watch-title">{singleShow.name}</p>
                                    <div className="watch-small-details">
                                        <p>Seasons: {singleShow.number_of_seasons}</p>
                                        <p>Episodes: {singleShow.number_of_episodes}</p>
                                    </div>
                                    <p className="watch-overview">{singleShow.overview}</p>
                                    <div className="watch-btns">
                                        <button>Play</button>
                                        <button>Trailer</button>
                                    </div>
                                </div>

                                <div className="watch-img">
                                    <img className="single-watch-img" src={`https://image.tmdb.org/t/p/w500${singleShow.poster_path}`}></img>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="seasons" className="season-name"></label>
                                    <select name="seasons" id="season-names">
                                        {singleShow.seasons?.map((each) => (
                                            <><option className="seasonID">{each.name}</option></>  
                                        ))}
                                </select>
                            </div>
                            <div className="episode-block">
                                {singleSeason.episodes?.map((each) => (
                                    <>
                                    <div className="episode-container">
                                        <h3>{each.name}</h3>
                                        <p>{each.runtime} minutes</p>
                                        <p>{each.overview}</p>
                                        <div className="episode-img-container">
                                            <img className="single-watch-img" src={`https://image.tmdb.org/t/p/w500${each.still_path}`}></img>  
                                        </div>
                                    </div>
                                    </>
                                ))}
                            </div>
                        </div>
                       </> 
                    ) : (
                        <>
                        <div className="movie-page">
                            <div className='single-watch-section' >
                                    <>
                                    <div className='watch-details' >
                                        <p className="watch-title">{singleMovie.title}</p>
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

                    )}
                </div>
            </div>
                </>
          )
    }


export default SearchMedia;