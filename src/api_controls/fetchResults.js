import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN;

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function fetchTrending() {
  const trendUrl = "trending/movie/day?language=en-US";

  const { data } = await axios.get(trendUrl, options);
  return data.results;
}

export async function fetchDetails(id) {
  const reviewsUrl = `movie/${id}?language=en-US`;

  const { data } = await axios.get(reviewsUrl, options);
  return data;
}

export async function fetchCast(id) {
  const castUrl = `movie/${id}/credits?language=en-US`;
  const { data } = await axios.get(castUrl, options);
  return data.cast;
}

export async function fetchReviews(id) {
  const reviewsUrl = `movie/${id}/reviews?language=en-US&page=1'`;
  const { data } = await axios.get(reviewsUrl, options);
  return data.results;
}

export async function fetchQery(query) {
  const queryUrl = `search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const { data } = await axios.get(queryUrl, options);
  return data.results;
}
