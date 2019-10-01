import axios from 'axios';

const baseURL = 'http://c929c9ef.ngrok.io';

export default axios.create({
  baseURL,
});