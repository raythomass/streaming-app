import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../components/Search";
import SearchResults from "../components/SearchResults";
const bearerKey = import.meta.env.VITE_BEARER_KEY;

function SearchPage() {
    
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    

    const fetchSearch = async (searchTerm) => {

        if (searchTerm == undefined) {
            searchTerm = ('');
        }

        const url = `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${bearerKey}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then((json) => {
                console.log(json.results);
                setResult(json.results);
                setSearch('');
            })
            .catch(err => console.error('error:' + err));

    };

    const handleInputChange = (e) => setSearch(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetchSearch(search);
      };

    useEffect(() => {
        fetchSearch()
    },[])

    return(
        <>
            <div className="search-container">
                <h1 className="search-title">Hello Search Page</h1>
                <SearchBar 
                value={search}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                />
                <div className="search-results-container">
                {result.map((res) => (
                    <>
                        <Link to={`/search/${res.id}`}>
                        <SearchResults
                            title={res.original_title}
                            poster={res.poster_path}
                        />
                        </Link>
                    </>
                ))}
                </div>
            </div>
        </>
    )
};


export default SearchPage;