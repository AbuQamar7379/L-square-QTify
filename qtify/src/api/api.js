import axios from "axios";

const config = {
    endpoint: {
        TopAlbum: "https://qtify-backend-labs.crio.do/albums/top",
        NewAlbum: "https://qtify-backend-labs.crio.do/albums/new",
        Songs: "https://qtify-backend-labs.crio.do/songs",
    },
};

const fetchTopAlbum = async() => {
    try {
        let res = await axios.get(config.endpoint.TopAlbum);
        return res.data;
    } catch (err) {
        return new Error("Failed to Fetch !", err);
    }
};

export { fetchTopAlbum };