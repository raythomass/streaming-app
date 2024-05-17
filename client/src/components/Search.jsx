export default function SearchBar(props) {

    return (
        <div className="search">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text"
              className="search-input"
              placeholder="Search For a Movie"
              id="search"
            />
        <br />
            <button
              onClick={props.handleFormSubmit}
              className="search-submit"
              type="submit"
              >
              Search
            </button>
        </div>
    )
};