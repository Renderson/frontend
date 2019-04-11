import axios from "axios";

const api = axios.create({
    baseURL: 'https://rcsoftware-backend.herokuapp.com'
});

export default api;