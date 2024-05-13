import React, { useEffect, useState } from 'react';
import { apiClientWithCredentials } from '../utils/ApiClient';

const Order = ({ userId, itemId, quantity }) => {
    const [orderCreated, setOrderCreated] = useState(localStorage.getItem('orderCreated') === 'true');
    const [orderId, setOrderId] = useState(localStorage.getItem('orderId'));

    useEffect(() => {
        localStorage.setItem('orderCreated', orderCreated.toString())
    }, [orderCreated])

    useEffect(() => {
        if (orderId) {
            localStorage.setItem('orderId', orderId)
        } else {
            localStorage.removeItem('orderId')
        }
    })

    const createOrder = async () => {
        const now = new Date().toISOString().replace('T', ' ').replace('Z', '');
        try {
            const orderResponse = await apiClientWithCredentials.post('orders/create/', {
                'user': userId,
                'order_status': 'pending',
                'payment_status': 'pending',
                'order_date': now
            });
            
            setOrderId(orderResponse.data.order_id);
            setOrderCreated(true);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const addToCart = async () => {
        try {
            const cartResponse = await apiClientWithCredentials.post('orders/line/create/', {
                'order': orderId,
                'item': parseInt(itemId),
                'order_quantity': quantity
            });

            console.log(`Added ${cartResponse.data.item.item_name} to cart`);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const handleAddToCartClick = async () => {
        if (!orderCreated) {
            await createOrder();
        }
        await addToCart()
    };

    return (
        <button className="Add-To-Cart-BTN rounded-sm my-[20px]" onClick={handleAddToCartClick}>
            Add to cart
        </button>
    );
};

export default Order;
