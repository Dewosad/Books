import axios from "axios";
import { toast } from "sonner";

export const BASE_URL = import.meta.env.VITE_APP_BACKEND_API_KEY;

const https = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

function getHeaders(isMulitpart = false) {
  return {
    "Content-Type": isMulitpart ? "multipart/form-data" : "application/json",
  };
}

function get(url, params = {}) {
  return https
    .get(url, {
      headers: getHeaders(),
      params,
    })
    .then((res) => res.data)
    .catch((err) => handleRequestError(err));
}

function handleRequestError(err) {
  toast.error(`Error:\n`, err);
  console.error("Request Error", err);
}

export default {
  get,
};
