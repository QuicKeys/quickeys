import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClientWithCredentials } from '../../utils/ApiClient';

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
              const userIdResponse = await apiClientWithCredentials.post('accounts/current-user/')

                const profileResponse = await apiClientWithCredentials.get(`/users/view/${userIdResponse.data.user_id}/`);
                if (profileResponse.data && typeof profileResponse.data === 'object') {
                    setProfile(profileResponse.data);
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
                  <div className="ProfileCard-Image" alt={`${profile.auth_user.first_name} image`}>
                    <img
                      className="transition-all duration-500 p-[25px] group-hover:scale-105"
                      src={profile.profile_picture_link}>
                    </img>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </>
    );
}

export default transition(Profile);