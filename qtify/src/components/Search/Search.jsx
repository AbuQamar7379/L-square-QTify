import { useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import styles from "./search.module.css";
import navbarStyles from "../Navbar/navbar.module.css";

const Search = ({ data }) => {
  let [value, setValue] = useState("");
  let [search, setSearch] = useState([]);
  console.log(value);

  const handleInput = (e) => {
    setValue(e.target.value);

    let arr = data.filter((album) => {
      return album.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearch(arr);
  };

  const handleSubmit = (e) => {
    console.log("click");
  };
  return (
    <div>
      <div className={navbarStyles.searchField}>
        <input
          type="search"
          placeholder="Search a album of your choice"
          value={value}
          onChange={handleInput}
        />
        <div>
          <img
            src={searchIcon}
            alt="Search Icon"
            onClick={handleSubmit}
            className={styles.searchIcon}
          />
        </div>
      </div>
      <div className={styles.searchResultWrapper}>
        {value.length > 0 && (
          <div className={styles.searchResult}>
            {!search.length ? (
              <h1 className={styles.notFound}>No Match Found!</h1>
            ) : (
              search.map((album) => {
                return (
                  <div className={styles.albumWrapper} key={album.id}>
                    <div className={styles.imgWrapper}>
                      <img
                        src={album.image}
                        alt=""
                        className={styles.albumImg}
                      />
                    </div>

                    <div className={styles.albumHeadingWrapper}>
                      <p className={styles.albumTitle}>{album.title}</p>
                      <p className={styles.artists}>
                        {album.songs[0].artists.join(", ")}.....
                      </p>
                    </div>
                    <div className={styles.followersWrapper}>
                      <p className={styles.followers}>{album.follows}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
