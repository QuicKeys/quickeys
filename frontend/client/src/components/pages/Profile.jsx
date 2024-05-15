import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClientWithCredentials } from '../../utils/ApiClient';
import LogoutButton from '../LogOutButton';
import ScrollableDiv from '../ScrollableDiv';

function Profile() {
    const [profile, setProfile] = useState(null);
    const [processingOrders, setProcessingOrders] = useState(null);
    const [shippedOrders, setShippedOrders] = useState(null);
    const [showProfileForm, setShowProfileForm] = useState(false); // State to control the visibility of the profile form

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileResponse = await apiClientWithCredentials.get(`/users/view/${localStorage.getItem('userId')}`);
                if (profileResponse.data && typeof profileResponse.data === 'object') {
                    setProfile(profileResponse.data);

                    const processingOrdersResponse = await apiClientWithCredentials.get(`orders/list/?user=${profileResponse.data.user_id}&order_status=processing`);
                    setProcessingOrders(processingOrdersResponse.data);

                    const shippedOrdersResponse = await apiClientWithCredentials.get(`orders/list/?user=${profileResponse.data.user_id}&order_status=shipped`);
                    setShippedOrders(shippedOrdersResponse.data);
                } else {
                    console.error('Received data is not in expected format:', profileResponse.data);
                    setProfile(null);
                    setShowProfileForm(true); // Show profile creation form if fetching profile fails
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setProfile(null);
                setShowProfileForm(true); // Show profile creation form if fetching profile fails
            }
        };

        fetchProfile();
    }, []);

    const handleCreateProfile = async (formData) => {
        try {
            const response = await apiClientWithCredentials.post(`/users/create/`, {
                'auth_user': localStorage.getItem('userId'),
                'birthdate': formData.birthdate,
                'contact_no': formData.contactNo
            });
            if (response.data && typeof response.data === 'object') {
                setProfile(response.data);
                setShowProfileForm(false);
            } else {
                console.error('Received data is not in expected format:', response.data);
            }
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    return (
        <>
            <div className="px-[50px] py-[100px]">
                <Reveal>
                    <div className="flex justify-center text-[75px] font-medium">
                        <span className="text-[#00FF8A] pr-[20px]">PROFILE</span> PAGE
                    </div>
                </Reveal>

                {profile ? (
                    <div className="flex flex-col items-center">
                        <Reveal>
                            <div className="group flex flex-col max-h-[400px] max-w-[300px]">
                                <p>{profile.auth_user.username}</p>
                                <p>{profile.auth_user.first_name}</p>
                                <p>{profile.auth_user.last_name}</p>
                                <p>{profile.birthdate}</p>
                                <p>{profile.contact_no}</p>
                            </div>

                            {processingOrders && processingOrders.length > 0 ? (
                                <div>
                                    <h2>Processing Orders</h2>
                                    <ScrollableDiv items={processingOrders}></ScrollableDiv>
                                </div>
                            ) : (
                                <div>
                                    <h2>Processing Orders</h2>
                                    <p>No processing orders available</p>
                                </div>
                            )}

                            {shippedOrders && shippedOrders.length > 0 ? (
                                <div>
                                    <h2>Shipped Orders</h2>
                                    <ScrollableDiv items={shippedOrders}></ScrollableDiv>
                                </div>
                            ) : (
                                <div>
                                    <h2>Processing Orders</h2>
                                    <p>No shipped orders available</p>
                                </div>
                            )}
                        </Reveal>
                    </div>
                ) : (
                    <div>
                        {showProfileForm && <ProfileForm onCreateProfile={handleCreateProfile} />}
                    </div>
                )}
            </div>
            <LogoutButton></LogoutButton>
        </>
    );
}

const ProfileForm = ({ onCreateProfile }) => {
    const [formData, setFormData] = useState({
        birthdate: '',
        contactNo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateProfile(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} placeholder="Birthdate" required />
            <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="Contact No" required />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default transition(Profile);
