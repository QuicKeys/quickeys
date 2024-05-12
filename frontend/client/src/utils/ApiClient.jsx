import axios from 'axios'

const apiClientWithCredentials = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})

const setAuthToken = (token) => {
    apiClientWithCredentials.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const removeAuthToken = () => {
    delete apiClientWithCredentials.defaults.headers.common['Authorization']
}

apiClientWithCredentials.interceptors.request.use(request => {
    return request
})

export { apiClientWithCredentials, apiClient , setAuthToken, removeAuthToken }