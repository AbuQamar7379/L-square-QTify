import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { useState, useEffect } from "react";
import {
  fetchTopAlbum,
  fetchNewAlbum,
  fetchSongs,
  fetchGenres
} from "./api/api";

const App = () => {
  let [topAlbum, setTopAlbum] = useState([]);
  let [newAlbum, setNewAlbum] = useState([]);
  let [songs, setSongs] = useState([]);
  let [genres, setGeneres] = useState([]);
  useEffect(() => {
    (async () => {
      let topAlbumData = await fetchTopAlbum();
      setTopAlbum(topAlbumData);

      let newAlbumData = await fetchNewAlbum();
      setNewAlbum(newAlbumData);

      let fetchSongsData = await fetchSongs();
      setSongs(fetchSongsData);

      let fetchSongsGenere = await fetchGenres();
      setGeneres(fetchSongsGenere.data);

    })();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="sectionWrapper">
        <Section title="Top Albums" data={topAlbum} type="album" />
        <Section title="New Albums" data={newAlbum} type="album" />
        <hr />
        <Section title="Songs" data={songs} type="songs" genres={genres} />
        <hr />
      </div>{" "}
    </>
  );
};

export default App;
