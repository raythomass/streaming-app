export default function SearchResults(props) {
    return (
        // <h1>{props.title}</h1>
        <div className="search-results-component">
            <img className="search-img" src={`https://image.tmdb.org/t/p/w500${props.poster}`}></img>
        </div>
    )
}