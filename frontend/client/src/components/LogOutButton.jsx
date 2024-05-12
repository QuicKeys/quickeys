import { useNavigate } from 'react-router-dom'
import { apiClientWithCredentials } from '../utils/ApiClient'

function LogoutButton() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await apiClientWithCredentials.post('accounts/logout/')

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
