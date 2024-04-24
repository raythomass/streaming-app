import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MoviePoster({ poster, title }){
    return (
        <>
            <div>
                <img className='poster-img' src={`https://image.tmdb.org/t/p/w500${poster}`} />
            </div>
        </>
    )
};