import axios from "axios";


const api = axios.create(
    {
        baseURL: 'https://estagio.geopostenergy.com/WorldCup',
        headers: {'git-user': 'joaomgsa'}
    }
);

export default api;
