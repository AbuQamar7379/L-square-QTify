import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { useState, useEffect } from "react";
import { fetchTopAlbum } from "./api/api";

const App = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let resData = await fetchTopAlbum();
      setData(resData);
    })();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="sectionWrapper">
        <Section title="Top Albums" data={data} type="album" />
      </div>{" "}
    </>
  );
};

export default App;
