import searchIcon from "../assests/Group 533.png";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a song of your choice"
      />

      <button>
        <img
          src={searchIcon}
          alt="search"
        />
      </button>
    </div>
  );
}

export default Search;