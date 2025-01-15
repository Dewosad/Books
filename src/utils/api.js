import API from "./request";

export const fetchBooks = (query) =>
  API.get("https://www.googleapis.com/books/v1/volumes", { q: query });
