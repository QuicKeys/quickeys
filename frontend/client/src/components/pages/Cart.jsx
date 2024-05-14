import React, { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClientWithCredentials } from '../../utils/ApiClient';
import { NavLink } from 'react-router-dom';

function Cart() {
  const [order, setOrder] = useState(null); 

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await apiClientWithCredentials.get(`/orders/line/list/?order=${localStorage.getItem('orderId')}`);
        console.log(response.data);
        if (response.data && typeof response.data === 'object') {
          const updatedOrder = response.data.map(orderLine => {
            if (orderLine.order_quantity > orderLine.item.item_quantity) {
              orderLine.order_quantity = orderLine.item.item_quantity;
            }
            return orderLine;
          });
          setOrder(updatedOrder);
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

  const [loggedIn, setLoggedInStatus] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('userId') != null) {
      setLoggedInStatus(true)
    }
  })

  const handleAuth = () => {
    setLoggedInStatus(!loggedIn);
  };

  const quantityADD = (index) => {
    const updatedOrder = [...order];
    if (updatedOrder[index].order_quantity < updatedOrder[index].item.item_quantity) {
      updatedOrder[index].order_quantity++;
      setOrder(updatedOrder);
    }
  };

  const quantitySUBTRACT = (index) => {
    const updatedOrder = [...order];
    if (updatedOrder[index].order_quantity > 1) {
      updatedOrder[index].order_quantity--;
      setOrder(updatedOrder);
    }
  };

  const removeFromCart = async (orderLineId) => {
    try {
      await apiClientWithCredentials.delete(`orders/line/edit/${orderLineId}/`);
      setOrder(order.filter(item => item.order_line_id !== orderLineId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const removeAllFromCart = async () => {
    try {
      await apiClientWithCredentials.delete(`/orders/line/delete-all/${localStorage.getItem('orderId')}/`);
      setOrder([]);
      localStorage.removeItem('orderId');
      localStorage.removeItem('orderCreated');
    } catch (error) {
      console.error('Error removing all items from cart:', error);
    }
  };

  return (
    <>
      <div>
        {order && order.length > 0 ? (
          <div className="flex flex-col justify-center items-center w-full h-full mt-[100px] mx-[15px]">
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
                              <p className="absolute top-[2px]">{orderLine.order_quantity}</p>
                            )}
                            <button onClick={() => quantityADD(index)}>
                              <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - ADD.png" alt="add"/>
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(orderLine.order_line_id)}>
                            REMOVE
                          </button>
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
                    <p className="Cart-Main-Text hidden sm:block">₱{parseFloat(orderLine.item.item_price * orderLine.order_quantity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>

                </div>
                <div className="bg-MainText/30 w-full h-[1px] my-[15px] sm:my-[25px]"/>
              </div>
            ))}
            <div className="flex justify-end w-full max-w-[1200px]">
              <div className="w-[350px]">
                <div className="flex justify-between w-full">
                  <div className="text-MainText/50 text-[20px] sm:text-[25px] font-medium">Subtotal</div>
                  <div className="text-[20px] sm:text-[25px] font-medium">₱Subtotal</div>
                </div>
                <p className="text-MainText/50 text-sm">Excluding taxes and shipping</p>
                <button className="bg-QKGreen text-BGMain font-semibold w-full mt-[25px] p-[10px] rounded-sm">Checkout</button>
                <p className="text-sm text-center mt-[10px] font-medium hover:underline block sm:hidden">Continue Shopping</p>
              </div>
            </div>

            <button onClick={removeAllFromCart}>REMOVE ALL FROM CART</button>

            <button className="bg-BGMain p-[5px] rounded-md mt-[25px]" onClick={handleAuth}>LOG OUT</button>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center w-screen h-[90vh]">
              <div className="flex justify-center max-w-[1200px] mx-[15px]">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[70px] text-center font-semibold transition-all duration-300 mx-[20px] leading-none">Your Cart is <span className="text-QKGreen">Empty</span>.</p>
                  <p className="flex text-center text-MainText/65 mt-[10px] transition-all duration-300">It appears that you haven't added items to your cart.</p>
                  <NavLink className="flex justify-center mt-[25px]" to="/Shop">
                    <div className="group text-center w-[250px] px-[50px] py-[10px] border-[3px] border-QKGreen hover:bg-QKGreen rounded-full transition-all duration-200">
                      <p className="text-[16px] sm:text-[18px] text-QKGreen group-hover:text-BGMain">
                        Go to Shop
                      </p>
                    </div>
                  </NavLink>
                  {!loggedIn && (
                    <p className="text-center mt-[100px] transition-all duration-300">
                      Have an account? <NavLink to="/Log-In">
                        <span><button className="text-QKGreen hover:underline">Log In </button></span>
                      </NavLink> here.
                    </p>
                  )}  
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default transition(Cart);
