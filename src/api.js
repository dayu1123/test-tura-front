import axios from 'axios';

const pics = axios.create({
  baseURL: 'http://localhost:3000'
})

export default pics