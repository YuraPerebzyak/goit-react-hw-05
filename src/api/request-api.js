const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjM1MWE2MzAwYTc0OTk5NDgyYmQ0Zjg2ZjRiODlkMCIsIm5iZiI6MTcyOTU5NDcyNS4wNTQxNjgsInN1YiI6IjY3MTc1MTkxOGUwNWE4YzlhODRkMmI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1FpprRGyv-OeIGBvn6k8YEUodhqeB0NVxQb_I3G9CMc",
  },
};

export const fetchVideos = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

export const fetchVideosByID = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

export const fetchCastByID = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cast:", error);
    return [];
  }
};

export const fetchReviewByID = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

export const fetchSearchMovie = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
