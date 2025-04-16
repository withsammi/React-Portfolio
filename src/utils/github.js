import axios from "axios";

export const fetchGithubData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return {
      repoCount: response.data.public_repos,
      followers: response.data.followers,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      repoCount: 0,
      followers: 0,
    };
  }
};
