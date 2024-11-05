import axios from "axios";

// Get values from environment variables
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

export default apiClient;
