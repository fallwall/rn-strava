import axios from 'axios';

const baseURL = 'http://e49973fe.ngrok.io';

export default axios.create({
  baseURL,
});