import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClient, apiClientWithCredentials } from '../../utils/ApiClient';
import { NavLink } from 'react-router-dom';

function Cart() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await apiClientWithCredentials.get(`/orders/line/list/?order=${localStorage.getItem('orderId')}`);
        console.log(response.data)
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
          if(order[0].order_quantity > order[0].item.item_quantity) {
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
            <div className="flex flex-col justify-center items-center w-full h-full mt-[100px]">
              <div className="flex justify-center sm:justify-between w-full max-w-[1200px]">
                <p className="text-QKGreen text-[60px] font-semibold">My Cart</p>
                <div className="flex items-center">
                  <NavLink to="/Shop" className="font-medium hover:underline hidden sm:block">Continue Shopping</NavLink>
                </div>
              </div>

              <div className="bg-MainText/30 w-full h-[1px] max-w-[1200px] mt-[15px] mb-[15px] sm:mb-[25px]"/>

              {order && order.map((orderLine, index) => (
  <div key={index} className="w-full max-w-[1200px]">
    <div className="flex justify-between gap-[10px]">

      <div className="flex gap-[12px] sm:gap-[20px]">
        <div className="ItemCard-Image-Cart">
          <NavLink to={`/Item/${orderLine.item.item_id}`}>
            <img
              className="transition-all duration-500 p-[5%] hover:scale-105"
              src={orderLine.item.item_profile_picture_link}
              alt={orderLine.item.item_name}
            />
          </NavLink>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <p className="Cart-Main-Text">{orderLine.item.item_name}</p>
            <p className="text-[80%] sm:text-[100%] text-QKGreen transition-all duration-300">₱{parseFloat(orderLine.item.item_price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col-reverse sm:flex-row sm:gap-[7px] sm:items-center">
              <div className="Quantity-Box rounded-sm my-[5px]">
                <button onClick={() => quantitySUBTRACT(index)}>
                  <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - SUBTRACT.png" alt="subtract"/>
                </button>
                {orderLine.item.item_quantity === 0 ? (
                  <p className="absolute top-[2px] opacity-50">0</p>
                ) : (
                  <p className="absolute top-[2px]">{quantity}</p>
                )}
                <button onClick={() => quantityADD(index)}>
                  <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - ADD.png" alt="add"/>
                </button>
              </div>
              {orderLine.item.item_quantity <= 15 && orderLine.item.item_quantity > 0 && (
                <p className="text-MainText/50 text-[80%] sm:text-[100%]">{orderLine.item.item_quantity} items left</p>
              )}
              {orderLine.item.item_quantity === 0 && (
                <p className="text-MainText/50 ml-[10px]">Out of stock</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <img className="min-h-[18px] min-w-[18px] h-[18px] w-[18px] opacity-50 hover:opacity-100 block sm:hidden" src="/src/assets/icons/ICON - Close.png" alt="close"/>
        <p className="Cart-Main-Text hidden sm:block">₱{parseFloat(orderLine.item.item_price * quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>

    </div>
    <div className="bg-MainText/30 w-full h-[1px] my-[15px] sm:my-[25px]"/>
  </div>
))}


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