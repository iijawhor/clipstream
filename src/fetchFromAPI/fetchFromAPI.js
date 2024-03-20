import axios from "axios";
const BASE_URL = "https://youtube-v2.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com"
  }
};

const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("Error in fetchFromAPI function ::: ", error);
  }
};
export default fetchFromAPI;
