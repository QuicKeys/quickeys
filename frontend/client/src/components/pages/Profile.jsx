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
            <div className="flex flex-col justify-center items-center w-full h-full mt-[100px]">
                <div className="flex justify-center nm:justify-between w-full max-w-[1200px] mb-[25px] px-[15px]">
                    <div className="flex flex-col">
                        <p className="text-QKGreen text-[60px] font-semibold leading-none">Account</p>
                        <LogoutButton/>
                    </div>
                </div>

                {profile ? (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="flex flex-col nm:flex-row-reverse justify-start nm:justify-between w-full max-w-[1200px] px-[15px] gap-[50px]">
                            <div className="max-w-[350px]">
                                <p className="text-[30px] font-medium">Account Details</p>
                                <p>{profile.auth_user.first_name} {profile.auth_user.last_name}</p>
                                <p className="py-[10px]">123 Main St. AnySubdivision., AnyTown, AnyCity, PH 12345</p>
                                <p>{profile.contact_no}</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[30px] font-medium mb-[10px]">To Ship</p>
                                <div className="text-MainText/50 flex justify-between mb-[5px]">
                                    <p className="w-[100px] text-start">Order #ID</p>
                                    <p className="w-[100px] text-center hidden xsm:block">Date</p>
                                    <p className="w-[100px] text-end">Total</p>
                                </div>
                                <div className="bg-MainText/50 h-[1px]"></div>

                                <div className="flex flex-col w-full">
                                    <div className="flex justify-between my-[10px]">
                                        <p className="w-[100px] text-start">#QK51F2ZK</p>
                                        <p className="w-[100px] text-center hidden xsm:block">5/14/2024</p>
                                        <p className="w-[100px] text-end">₱4,560.00</p>
                                    </div>
                                    <div className="bg-MainText/50 h-[1px]"></div>
                                </div>
                            </div>
                        </div>
                        <Reveal>

                            {/* {processingOrders && processingOrders.length > 0 ? (
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
                            )} */}
                        </Reveal>
                    </div>
                ) : (
                    <div>
                        {showProfileForm && <ProfileForm onCreateProfile={handleCreateProfile} />}
                    </div>
                )}
            </div>
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
