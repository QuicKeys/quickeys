import axios from 'axios'

const apiClientWithCredentials = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true
})

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})

export { apiClientWithCredentials, apiClient }