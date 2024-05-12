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

            if (verifyResponse.data.error) {
                const refreshResponse = await apiClient.post('accounts/refresh/')
                
                if (refreshResponse && refreshResponse.data && refreshResponse.data.access) {
                    setAuthToken(refreshResponse.data.access)
                    return request
                } else {
                    console.error('Failed to refresh access token')
                    //Navigate to login
                }
            } else {
                return request
            }
        } else {
            console.error('Failed to retrieve access token')
            //Navigate to login
        }
    } catch (error) {
        console.error('Error refreshing token:', error)
        //Navigate to login
    }
})

export { apiClientWithCredentials, apiClient , setAuthToken, removeAuthToken }