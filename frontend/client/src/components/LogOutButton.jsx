import { useNavigate } from 'react-router-dom'
import apiClient from '../utils/ApiClient'

function LogoutButton() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await apiClient.post('accounts/logout/')

            navigate('/Log-In');
            console.log(response);
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
