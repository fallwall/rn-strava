import axios from 'axios';

const baseURL = 'http://69e340ae.ngrok.io';

export default axios.create({
  baseURL,
});