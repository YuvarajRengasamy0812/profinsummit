import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:4000/api/'});
const API = axios.create({baseURL:"https://staging.profxsportsclub.com/api/v1"})

API.interceptors.request.use(request => {
    const token = localStorage.getItem("token")
    const basicAuth = `Basic ` + btoa("profxsportsclub:402784613671175");
    request.headers.authorization = basicAuth;
    if (token) {
        request.headers.token = `Bearer ${token}`;
    }
    return request
})

API.interceptors.response.use(response => {
    return response
})

export default API;