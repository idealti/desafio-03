import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:4444",
});

export default api;
