import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

function TVShowPage() {

    const [singleShow, setSingleShow] = useState([]);
    const [singleSeason, setSingleSeason] = useState([]);

    const { id } = useParams();
    const seasonID = singleShow.seasons

    const fetchShow = async () => {
        const { data } = await API.fetchSingleShow(id);

        setSingleShow(data);
        console.log(data);
    }

    const fetchSeason = async () => {
        const {data} = await API.fetchSingleSeason(id, seasonID)

        setSingleSeason(data);
        console.log(data);
    }

    useEffect(() => {
        fetchShow();
        fetchSeason();
      }, []);

      
      return (

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

            <div>
                {singleSeason.episodes?.map((each) => (
                    <>
                    <div className="episode-cont">
                        <h3>{each.name}</h3>
                        <p>{each.runtime} minutes</p>
                        <p>{each.overview}</p>
                        <img className="single-watch-img" src={`https://image.tmdb.org/t/p/w500${each.still_path}`}></img>
                    </div>
                    </>
                ))}
            </div>
        
        

        {/* <div className="show-seasons">
            <h2>Seasons:</h2>
            <div className="season-each">
                {singleShow.seasons?.map((season) => (
                    <>
                    <div>
                        <img className="season-poster" src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}></img>
                    </div>
                    </>
                ))}
            </div>
        </div> */}
        </div>
        
      )
}

export default TVShowPage;