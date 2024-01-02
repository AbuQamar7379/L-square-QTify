import "./App.css";
import AlbumPage from "./components/Album Page/AlbumPage";
import HomePage from "./components/Home Page/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" Component={HomePage} />{" "}
        <Route path="/album/:title" Component={AlbumPage} />{" "}
      </Routes>{" "}
    </>
  );
};

export default App;
