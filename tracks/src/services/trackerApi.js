import axios from 'axios';

const baseURL = 'http://fa767c08.ngrok.io';

export default axios.create({
  baseURL,
});