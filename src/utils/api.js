import API from "./request";

export const fetchBooks = (query) => API.get("/volumes", { q: query });
