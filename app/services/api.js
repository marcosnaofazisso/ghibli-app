import axios from 'axios';

const api = axios.create({
    baseURL:'https://ghibliapi.herokuapp.com/'
});

export default api;

