import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { useState, useEffect } from "react";
import { fetchTopAlbum , fetchNewAlbum} from "./api/api";

const App = () => {
  let [topAlbum, setTopAlbum] = useState([]);
  let [newAlbum, setNewAlbum] = useState([]);
  useEffect(() => {
    (async () => {
      let topAlbumData = await fetchTopAlbum();
      setTopAlbum(topAlbumData);

      let newAlbumData = await fetchNewAlbum();
      setNewAlbum(newAlbumData)
      
    })();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="sectionWrapper">
        <Section title="Top Albums" data={topAlbum} type="album" />
        <Section title="New Albums" data={newAlbum} type='album' />
      </div>{" "}
    </>
  );
};

export default App;
