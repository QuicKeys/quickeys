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
    withCredentials: true
})

const setAuthToken = (token) => {
    apiClientWithCredentials.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const removeAuthToken = () => {
    delete apiClientWithCredentials.defaults.headers.common['Authorization']
}

apiClientWithCredentials.interceptors.request.use(async (request) => {
    try {
        const retrieveResponse = await apiClient.post('accounts/retrieve-access/')
        if (retrieveResponse.data.access) {
            const verifyResponse = await apiClient.post('api/token/verify/', {
                'token': retrieveResponse.data.access
            })
            // If token verification succeeds, return the original request
            return request
        } else {
            console.error('No access token found')
            throw new Error('No access token found')
        }
    } catch (error) {
        // Attempt to refresh token
        try {
            const refreshResponse = await apiClient.post('accounts/refresh/')
            if (refreshResponse.data.access) {
                setAuthToken(refreshResponse.data.access)
                // Retry the original request with the new token
                const newRequest = { ...request}
                newRequest.headers['Authorization'] = `Bearer ${refreshResponse.data.access}`
                return newRequest
            } else {
                console.error('Failed to refresh token')
                throw new Error('Failed to refresh token')
            }
        } catch (refreshError) {
            console.error('Failed to refresh token:', refreshError)
            throw refreshError
        }
    }
})


export { apiClientWithCredentials, apiClient , setAuthToken, removeAuthToken }