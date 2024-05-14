import { useNavigate } from 'react-router-dom'
import { apiClientWithCredentials, removeAuthToken } from '../utils/ApiClient'

function LogoutButton() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const orderId = localStorage.getItem('orderId')

            if (orderId) {
                await apiClientWithCredentials.delete(`/orders/line/delete-all/${localStorage.getItem('orderId')}/`)
            }
            localStorage.removeItem('orderId')

            const response = await apiClientWithCredentials.post('accounts/logout/')

            removeAuthToken
            localStorage.removeItem('userId')
            navigate('/Log-In');

            console.log(response.data.message);
        } catch (error) {
            console.error("Logout failed", error.message)

            if (error.response) {
                console.error("Server response:", error.response.data)
            }
        }
    }

    return <button onClick={handleLogout}>Log Out</button>
}

export default LogoutButton
