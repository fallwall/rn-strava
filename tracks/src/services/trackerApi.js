import axios from 'axios';

const baseURL = 'http://214e675b.ngrok.io';

export default axios.create({
  baseURL,
});