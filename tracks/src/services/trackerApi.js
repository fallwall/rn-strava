import axios from 'axios';

const baseURL = 'http://b10993a8.ngrok.io';

export default axios.create({
  baseURL,
});