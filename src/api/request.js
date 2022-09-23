import Axios from 'axios'
import {baseURL} from './url'

let axios = Axios.create({
    baseURL,
});

axios.interceptors.request.use((config) => {
    return config;
});

axios.interceptors.response.use((response) => {
    if(response.status === 200) {
        console.log(response.data.message);
    }
    return response.data;
});

export default axios;