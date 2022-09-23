import axios from "./request"

export function getRequest(url) {
    return axios.request({
        url,
        method: 'get'
    });
}

export function postRequest(url, data) {
    return axios.request({
        url,
        data,
        method: 'post'
    });
}

export function deleteRequest(url, data) {
    return axios.request({
        url,
        data,
        method: 'delete'
    });
}