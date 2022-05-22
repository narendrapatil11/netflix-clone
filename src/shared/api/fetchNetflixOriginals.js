import API from "./api";
import { API_URL } from "../constants";

const fetchNetflixOriginals = () => {
  return API.get(API_URL.FETCH_NETFLIX_ORIGINALS);
}
export default fetchNetflixOriginals;