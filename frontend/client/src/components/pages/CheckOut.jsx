import React, { useState, useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { NavLink } from 'react-router-dom'
import { apiClientWithCredentials } from '../../utils/ApiClient'

function CheckOut() {
    const [order, setOrder] = useState([]);
    const [profile, setProfile] = useState(null)
    const [userAddress, setUserAddress] = useState(null)

    const handlePayment = async () => {
        try {
          await apiClientWithCredentials.patch(`orders/edit/${localStorage.getItem('orderId')}/`, {
            'order_status': 'processing'
          })
    
          localStorage.removeItem('orderId')
        } catch (error) {
          console.error('Error checking out:', error)
        }

        // Navigate to success page
      }

      

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await apiClientWithCredentials.get(`/orders/line/list/?order=${localStorage.getItem('orderId')}`);
        if (response.data && Array.isArray(response.data)) {
          setOrder(response.data);
        } else {
          console.error('Invalid order data received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();

    const fetchUserProfile = async () => {
        try {
            const profileResponse = await apiClientWithCredentials.get(`/users/view/${localStorage.getItem('userId')}`);
            if (profileResponse.data) {
              setProfile(profileResponse.data);

              const addressResponse = await apiClientWithCredentials.get(`users/address/view/${profileResponse.data.user_id}`)
              setUserAddress(addressResponse.data)
            } else {
              console.error('Invalid user profile data received:', profileResponse.data);
            }
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        };
    
        fetchUserProfile();
        
  }, []);

    return (
        <>
            <div>
                <div className="flex flex-cols-2 justify-center gap-1 w-full h-full mt-[100px] mx-[15px]">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="rounded-md w-[750px]">
                            <div className="pt-[20px] pb-[5px]">
                            </div>
                            {order.map((orderLine, index) => (
  <div key={index}>
    <div className="h-[20px]"/>
    <div className="w-full max-w-[1200px]">
      <div className="w-[750] h-full flex items-center justify-center">
        <div className="gap-[10px] w-[531px]">
          <div className="flex flex-cols-2 gap-[12px] sm:gap-[20px]">
            <div className="ItemCard-Image-Check-Out">
              <NavLink to={`/Item/${orderLine.item.item_id}`}>
                <img
                  className="transition-all duration-500 p-[5%] hover:scale-105"
                  src={orderLine.item.item_profile_picture_link}
                  alt={orderLine.item.item_name}
                />
              </NavLink>
            </div>
            <div className="flex justify-between">
              <div>
                <p>{orderLine.item.item_name}</p>
                <p>Qty. {orderLine.order_quantity}</p>
              </div>
              <div className="mx-[50px]">₱{parseFloat(orderLine.item.item_price * orderLine.order_quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}


                            <div className="h-[20px]"/>

                            <div class="flex justify-between">
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                        Subtotal
                                    </div>
                                </div>
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                    ₱{parseFloat(localStorage.getItem('total')).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </div>
                                </div>
                            </div>

                            <div className="h-[1px] w-[530px] bg-[#D4D1CD] opacity-50 mx-[109px] my-[10px]"/>

                            <div class="flex justify-between">
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                        Shipping
                                    </div>
                                    <div className='text-[15px]'>
                                        Ground shipping (3-5) Business Days
                                    </div>
                                </div>
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                    ₱10.00
                                    </div>
                                </div>
                            </div>

                            <div className="h-[1px] w-[530px] bg-[#D4D1CD] opacity-50 mx-[109px] my-[10px]"/>

                            <div class="flex justify-between">
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                        Total due
                                    </div>
                                </div>
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                    ₱{(parseFloat(localStorage.getItem('total')) + 10).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full h-full">
                        <div className="flex justify-center pt-[20px] pb-[5px]">
                            <div className="h-[50px] w-[400px] 
                                bg-[#FFFFFF] text-[#252525] text-[20px] font-medium 
                                rounded-lg flex items-center 
                                justify-center"> CREDIT CARD
                            </div>
                        </div>

                        <div className="h-[1px] w-[400px] bg-[#D4D1CD] opacity-50 my-[10px]"/>

                        <div className="h-[30px] w-[400px] flex justify-center">
                            Shipping Information
                        </div>
                        {profile && userAddress && (
  <>
    <div className="flex h-[30px] w-[400px] my-[5px]">
      Email: {profile.auth_user.username}
    </div>
    <div className="h-full w-[400px] flex flex-col my-[10px]">
      <div className="flex h-[30px] w-[400px]">
        Shipping Address
      </div>
      <div className="ml-2 border-2 border-black rounded-md overflow-hidden">
        <p className="border-b-2 border-black p-2">Name: {profile.auth_user.first_name} {profile.auth_user.last_name}</p>
        <p className="border-b-2 border-black p-2">{profile.contact_no}</p>
        <p className="p-2">{userAddress.user_address}</p>
      </div>
    </div>
  </>
)}

                        <div className="h-[30px] w-[400px] flex justify-center my-[5px]">
                            Payment details
                        </div>
                        <div className="h-full w-[400px] flex flex-col">
                            <div className="flex h-[30px] w-[400px] items-center">
                                Card Information
                            </div>
                            <div className="ml-2 border-2 border-black rounded-md overflow-hidden">
                                <input type="text" placeholder="Card Number" className="border-b-2 border-black p-2 w-full" />
                                <div className="flex border-b-2 border-black">
                                    <input type="month" placeholder="MM/YY" className="p-2 w-1/2 border-r-2 border-black" />
                                    <input type="text" placeholder="CVC" className="p-2 w-1/2" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pt-[20px] pb-[5px]">
                            <button className="transition-all duration-100 h-[50px] w-[400px] 
                                bg-[#00FF8A] hover:bg-[#00ff88d6] text-[#252525] 
                                text-[20px] font-medium rounded-lg"
                                onClick={handlePayment}> Pay ₱{(parseFloat(localStorage.getItem('total')) + 10).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default transition(CheckOut);
