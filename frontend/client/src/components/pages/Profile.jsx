import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClientWithCredentials } from '../../utils/ApiClient';
import LogoutButton from '../LogOutButton';
import ScrollableDiv from '../ScrollableDiv';

function Profile() {
    const [authUser, setAuthUser] = useState(null)
    const [profile, setProfile] = useState(null);
    const [userAddress, setUserAddress] = useState(null)
    const [processingOrders, setProcessingOrders] = useState(null);
    const [shippedOrders, setShippedOrders] = useState(null);
    const [showProfileForm, setShowProfileForm] = useState(false); // State to control the visibility of the profile form

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const authUserResponse = await apiClientWithCredentials.get(`users/auth-user/${localStorage.getItem('userId')}/`);
                setAuthUser(authUserResponse.data)
                const profileResponse = await apiClientWithCredentials.get(`/users/view/${localStorage.getItem('userId')}`);
                if (profileResponse.data && typeof profileResponse.data === 'object') {
                    setProfile(profileResponse.data);

                    const processingOrdersResponse = await apiClientWithCredentials.get(`orders/list/?user=${profileResponse.data.user_id}&order_status=processing`);
                    setProcessingOrders(processingOrdersResponse.data);

                    const shippedOrdersResponse = await apiClientWithCredentials.get(`orders/list/?user=${profileResponse.data.user_id}&order_status=shipped`);
                    setShippedOrders(shippedOrdersResponse.data);

                    const addressResponse = await apiClientWithCredentials.get(`users/address/view/${profileResponse.data.user_id}`)
                    setUserAddress(addressResponse.data)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setProfile(null);
                setShowProfileForm(true); // Show profile creation form if fetching profile fails
                const authUserResponse = await apiClientWithCredentials.get(`users/auth-user/${localStorage.getItem('userId')}/`);
                setAuthUser(authUserResponse.data)
            }
        };

        fetchProfile();
    }, []);

    const handleCreateProfile = async (formData) => {
        try {
            const response = await apiClientWithCredentials.post(`/users/create/`, {
                'auth_user': localStorage.getItem('userId'),
                'contact_no': formData.contactNo
            });
            
            if (response.data && typeof response.data === 'object') {
                setProfile(response.data);
                setShowProfileForm(false);
                const addressResponse = await apiClientWithCredentials.post(`users/address/create/`, {
                    'user': response.data.user_id,
                    'user_address': formData.address
                })
                setUserAddress(addressResponse.data)
                setAuthUser(response.data.auth_user)
                setProfile(response.data)
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

                <div className="flex justify-center items-center w-full h-full">
                        <div className="flex flex-col nm:flex-row-reverse justify-start nm:justify-between w-full max-w-[1200px] px-[15px] gap-[50px]">
                            <div>
                                <div className="max-w-[350px]">
                                    <p className="text-[30px] font-medium w-[350px]">Account Details</p>
                                </div>
                                {authUser && (
                                    <p>{authUser.first_name} {authUser.last_name}</p>
                                )}
                                {profile && userAddress ? (
                                    <>
                                        <div className="group flex flex-col max-h-[400px] max-w-[300px]">
                                        <p>{profile.contact_no}</p>
                                        <p>{userAddress.user_address}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            {showProfileForm && <ProfileForm onCreateProfile={handleCreateProfile} />}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[30px] font-medium mb-[10px]">Orders</p>
                                <div className="text-MainText/50 flex justify-between mb-[5px]">
                                    <p className="w-[100px] text-start">Order #ID</p>
                                    <p className="w-[100px] text-center hidden xsm:block">Status</p>
                                    <p className="w-[100px] text-end">Date</p>
                                </div>
                                <div className="bg-MainText/50 h-[1px]"></div>

                                <div className="flex flex-col w-full">
                                    <div className="flex justify-between my-[10px]">
                                        <p className="w-[100px] text-start">#QK51F2ZK</p>
                                        <p className="w-[100px] text-center hidden xsm:block">Pending</p>
                                        <p className="w-[100px] text-end">5/14/2024</p>
                                    </div>
                                    <div className="bg-MainText/50 h-[1px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}

const ProfileForm = ({ onCreateProfile }) => {
    const [formData, setFormData] = useState({
        birthdate: '',
        contactNo: '',
        address: '',
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

    // Contact
    const [contactActive, setContactActive] = useState(false);
    const [contactFocused, setContactFocused] = useState(false);

    // Address
    const [addressActive, setAddressActive] = useState(false);
    const [addressFocused, setAddressFocused] = useState(false);

    return (
        <form className="flex flex-col w-[300px]" onSubmit={handleSubmit}>
            {/* <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required /> */}
            <div className="flex flex-col gap-[5px] my-[10px]">
                <div className="relative flex justify-center w-full max-w-[510px]">
                    <input // CONTACT
                        type="text"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        onFocus={() => {setContactActive(true); setContactFocused(true);}} onBlur={() => {setContactActive(false); setContactFocused(false);}}
                        className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full 
                            ${(contactFocused) && 'border-[#00FF8A]'}`}
                        required
                    />
                    <label
                        className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                        ${(contactActive || formData.contactNo) && 'text-xs transform translate-y-[-30%]'} 
                        ${(contactFocused) && 'text-[#00FF8A]'}`}
                    >
                        Contact No.
                    </label>
                </div>
                <div className="relative flex justify-center w-full max-w-[510px]">
                    <input // ADDRESS
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onFocus={() => {setAddressActive(true); setAddressFocused(true);}} onBlur={() => {setAddressActive(false); setAddressFocused(false);}}
                        className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full 
                            ${(addressFocused) && 'border-[#00FF8A]'}`}
                        required
                    />
                    <label
                        className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                        ${(addressActive || formData.address) && 'text-xs transform translate-y-[-30%]'} 
                        ${(addressFocused) && 'text-[#00FF8A]'}`}
                    >
                        Address
                    </label>
                </div>
            </div>
            <button className="bg-QKGreen text-BGMain font-medium py-[10px] rounded-md hover:bg-[#00EA7F]" type="submit">Complete Profile</button>
        </form>
    );
};

export default transition(Profile);
