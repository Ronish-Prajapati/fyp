import axios from "axios";

export const BASE_URL = "http://localhost:1010"; // Fixed typo

export const myAxios = axios.create({
    baseURL: BASE_URL,
});