// AlbumSongs.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopAlbum, fetchNewAlbum } from "../../api/api";
import { useEffect } from "react";
import AlbumSongs from "../Album Songs/AlbumSongs";
const AlbumPage = () => {
  const { title } = useParams();
  let [songs, setSongs] = useState([]);
  let fetchSongs = async (album) => {
    let findSong = album.find((song) => song.slug === title);
    setSongs(findSong.songs);
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      let topAlbum = await fetchTopAlbum();
      let newAlbum = await fetchNewAlbum();
      let allAlbum = topAlbum.concat(newAlbum);
      fetchSongs(allAlbum);
    };
    fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
  return (
    <>
      <AlbumSongs albumSongs={songs} />
    </>
  );
};

export default AlbumPage;
