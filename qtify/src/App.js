import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero Section/HeroSection";
import TopAlbum from "./components/Card Section/TopAlbum";

const config = {
  endpoint: {
    topAlbum: "https://qtify-backend-labs.crio.do/albums/top",
    newAlbum: "https://qtify-backend-labs.crio.do/albums/new",
    songs: "https://qtify-backend-labs.crio.do/songs",
    genre: "https://qtify-backend-labs.crio.do/genre",
  },
};

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TopAlbum />
    </>
  );
}

export default App;
export { config };
