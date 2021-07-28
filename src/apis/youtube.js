import axios from "axios";

// AllCaps for constant Value that prop should not be changed
const KEY = "AIzaSyCjY3BJMIQlT00XrmmlSfzfl52Wu4yhZW8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
