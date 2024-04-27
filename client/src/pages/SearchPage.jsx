import { useEffect, useState } from "react";
import SearchBar from "../components/Search";
import SearchResults from "../components/SearchResults";

function SearchPage() {
    
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

    const fetchSearch = async (searchTerm) => {

        const url = `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY0NzQ0ZmM0YmM1MTkxMmFhYTQ2ZmVjZDk1OGQwNiIsInN1YiI6IjY1ZjUxNDA1Yjk3NDQyMDE2NGY5NGZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZbOx0atd3X7nEtWaPws8f3YenyQID1G9Hr7bbym2ek'
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
            <h1>Hello Search Page</h1>
            <SearchBar 
            value={search}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            />
            {result.map((res) => (
                <>
                <SearchResults
                    title={res.original_title}
                />
                </>
            ))}
        </>
    )
};


export default SearchPage;