import React from "react";

function AlbumSongs({ albumSongs }) {
  return (
    <div>
      {albumSongs.map((song) => {
        return <h2 key={song.title}>{song.title}</h2>;
      })}
    </div>
  );
}

export default AlbumSongs;
