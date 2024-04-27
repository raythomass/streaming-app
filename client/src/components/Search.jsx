export default function SearchBar(props) {

    return (
        <div>
            <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className=""
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className=""
          type="submit"
        >
          Search
        </button>
        </div>
    )
};