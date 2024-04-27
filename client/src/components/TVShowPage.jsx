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
        <div className='single-watch-section'>
            <>
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