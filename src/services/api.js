import axios from "axios";


const api = axios.create(
    {
        baseURL: 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams',
        headers: {'git-user': 'joaomgsa'}
    }
);

export default api;
