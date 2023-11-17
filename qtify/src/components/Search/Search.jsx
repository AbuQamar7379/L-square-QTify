import searchIcon from "../../assets/searchIcon.svg";

const Search = () => {
  return (
    <div className="searchField">
      <input type="search" placeholder="Search a album of your choice" />
      <div>
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </div>
  );
};

export default Search;
/*
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

const onSubmit = (e) => {
    e.preventDefault();
  };

<form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          type="search"
          className={styles.search}
          placeholder={placeholder}
          required
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
*/
