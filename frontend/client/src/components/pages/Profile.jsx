import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClientWithCredentials } from '../../utils/ApiClient';
import LogoutButton from '../LogOutButton';
import ScrollableDiv from '../ScrollableDiv';

function Profile() {
    const [profile, setProfile] = useState(null);
    const [processingOrders, setProcessingOrders] = useState(null)
    const [shippedOrders, setShippedOrders] = useState(null)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileResponse = await apiClientWithCredentials.get(`/users/view/${localStorage.getItem('userId')}`);
                if (profileResponse.data && typeof profileResponse.data === 'object') {
                    setProfile(profileResponse.data);

                    const processingOrdersResponse = await apiClientWithCredentials.get(`orders/list/?user=${profileResponse.data.user_id}&order_status=processing`)
                    setProcessingOrders(processingOrdersResponse.data)

                    const shippedOrdersResponse = await apiClientWithCredentials.get(`orders/list/?user=${profileResponse.data.user_id}&order_status=shipped`)
                    setShippedOrders(shippedOrdersResponse.data)
                } else {
                    console.error('Received data is not in expected format:', profileResponse.data);
                    setProfile(null);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setProfile(null);
            }
        };
      
        fetchProfile();
    }, []);

    return (
      <>
        <div className="px-[50px] py-[100px]">
          <Reveal>
            <div className="flex justify-center text-[75px] font-medium">
              <span className="text-[#00FF8A] pr-[20px]">PROFILE</span> PAGE
            </div>
          </Reveal>

          {profile && (
            <div className="flex flex-col items-center">
              <Reveal>
                <div className="group flex flex-col max-h-[400px] max-w-[300px]">
                  <p>{profile.auth_user.username}</p>
                  <p>{profile.auth_user.first_name}</p>
                  <p>{profile.auth_user.last_name}</p>
                  <p>{profile.birthdate}</p>
                  <p>{profile.contact_no}</p>
                </div>

                {processingOrders && (
                  <div>
                    <h2>Processing Orders</h2>
                    <ScrollableDiv items={processingOrders}></ScrollableDiv>
                  </div>
                )}

                {shippedOrders && (
                  <div>
                    <h2>Shipped Orders</h2>
                    <ScrollableDiv items={shippedOrders}></ScrollableDiv>
                  </div>
                )}

              </Reveal>
            </div>
          )}
        </div>
        <LogoutButton></LogoutButton>
      </>
    );
}

export default transition(Profile);