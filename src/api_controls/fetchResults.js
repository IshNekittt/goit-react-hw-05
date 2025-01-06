import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN;

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export async function fetchTrending() {
  const trendUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const { data } = await axios.get(trendUrl, options);
  return data.results;
}

export async function fetchDetails(id) {
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const { data } = await axios.get(reviewsUrl, options);
  return data;
}
