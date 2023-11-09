import axios from "axios";
import { useState, useEffect } from "react";
import { config } from "../../App";

const AlbumCards = ({ showCard }) => {
    let [topAlbum, setTopAlbum] = useState([]);

    const fetchTopAlbum = async() => {
        try {
            let response = await axios.get(config["endpoint"]["topAlbum"]);
            setTopAlbum(response.data);
        } catch (err) {
            return new Error(err);
        }
    };

    useEffect(() => {
        fetchTopAlbum();
    }, []);

    return (
      <div id="topAlbum">
        {topAlbum.map((album, index) => {
          const cardStyle = index >= 9 && !showCard.showAll ? { display: "none" } : {};
    
          return (
            <div className="card" key={album.id} id={album.id} style={cardStyle}>
              <div className="cardImg">
                <img src={album.image} alt={album.title} />
                <p>
                  {(album.follows / 100).toFixed(1)}
                  {album.follows > 999999 ? "m" : "k"} Follows
                </p>
              </div>
              <div>
                <h3> {album.title} </h3>
              </div>
            </div>
          );
        })}
      </div>
    );
    
};

export default AlbumCards;