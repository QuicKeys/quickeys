import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClient } from '../../utils/ApiClient';
import { NavLink } from 'react-router-dom';

function Cart() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await apiClient.get(`/orders/line/view/1/`);
          if (response.data && typeof response.data === 'object') {
            setOrder(response.data);
          } else {
            console.error('Received data is not in expected format:', response.data);
            setOrder(null);
          }
        } catch (error) {
        console.error('Error fetching data:', error);
        setOrder(null);
      }
    };
  
    fetchOrder();
  }, []);

  const [loggedIn, setLoggedInStatus] = useState(true)

  const handleAuth = () => {
    setLoggedInStatus(!loggedIn)
  }


  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
      if (order && order.order_quantity != null) {
          if(order.order_quantity > order.item.item_quantity) {
            setQuantity(order.item.item_quantity);
          } else {
            setQuantity(order.order_quantity);
          }
      }
  }, [order]);

  const quantityADD = () => {
      if (quantity != null && quantity < order.item.item_quantity) {
          setQuantity(prevQuantity => prevQuantity + 1);
      }
  };

  const quantitySUBTRACT = () => {
      if (quantity != null && quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
  };

  return (
      <>
        <div className="px-[15px]">
          {loggedIn ? (
            <div className="flex flex-col justify-center items-center w-full h-[90vh]">
              <div className="flex justify-center sm:justify-between w-full max-w-[1200px]">
                <p className="text-QKGreen text-[60px] font-semibold">My Cart</p>
                <div className="flex items-center">
                  <NavLink to="/Shop" className="font-medium hover:underline hidden sm:block">Continue Shopping</NavLink>
                </div>
              </div>

              <div className="bg-MainText/30 w-full h-[1px] max-w-[1200px] my-[10px]"/>

              {order && (
                <>
                  <div className="w-full max-w-[1200px]">
                    <div className="min-h-[300px] max-h-[450px]">
                      <div className="flex gap-[20px]">
                        <div className="ItemCard-Image-Cart max-h-[200px] max-w-[200px]">
                          <NavLink to={`/Item/${order.item.item_id}`}>
                            <img
                              className="transition-all duration-500 p-[5%] hover:scale-105"
                              src={order.item.item_profile_picture_link}>
                            </img>
                          </NavLink>
                        </div>
                        
                        <div className="flex flex-col justify-between">
                          <div>
                            <p className="text-[20px] font-semibold max-w-[400px]">{order.item.item_name}</p>
                            <p className="text-QKGreen">₱{parseFloat(order.item.item_price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                          </div>
                          <div className="flex items-center">
                                        <div className="Quantity-Box rounded-sm my-[5px]">
                                            <button onClick={quantitySUBTRACT}>
                                                <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - SUBTRACT.png"/>
                                            </button>
                                            {order.item.item_quantity === 0 ? (
                                                <p className="absolute top-[2px] opacity-50">0</p>
                                            ) : (
                                                <p className="absolute top-[2px]">{quantity}</p>
                                            )}
                                            <button onClick={quantityADD}>
                                                <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - ADD.png"/>
                                            </button>
                                        </div>
                                        {order.item.item_quantity <= 15 && order.item.item_quantity > 0 && (
                                            <p className="text-MainText/50 ml-[10px]">{order.item.item_quantity} items left</p>
                                        )}
                                        {order.item.item_quantity === 0 && (
                                            <p className="text-MainText/50 ml-[10px]">Out of stock</p>
                                        )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <button className="bg-BGMain p-[5px] rounded-md mt-[25px]" onClick={handleAuth}>LOG OUT</button>
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center w-screen h-[90vh]">
                You are not logged in bro what are u doing
                <button className="bg-BGMain p-[5px] rounded-md mt-[25px]" onClick={handleAuth}>LOG IN</button>
              </div>
            </>
          )}
        </div>
      </>
  )
}

export default transition(Cart);