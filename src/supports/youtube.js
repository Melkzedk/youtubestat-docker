import axios from 'axios';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', // YouTube Data API endpoint
  params: {
    part: 'snippet,statistics', // Default parameters for requests
    key: 'https://www.googleapis.com/youtube/v3'
  }
});
