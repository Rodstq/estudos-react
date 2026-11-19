import axios from "axios";
import type { Movie } from "../types";

const url_base = "http://localhost:3001";

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(`${url_base}/movies`);
  return response.data;
};
