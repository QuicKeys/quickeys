import React, { useEffect } from 'react';
import { apiClientWithCredentials } from '../utils/ApiClient';

const Order = ({ userId, itemId, quantity }) => {
    const createOrder = async () => {
        const now = new Date().toISOString().replace('T', ' ').replace('Z', '');
        try {
            const orderResponse = await apiClientWithCredentials.post('orders/create/', {
                'user': userId,
                'order_status': 'pending',
                'payment_status': 'pending',
                'order_date': now
            });
            
            localStorage.setItem('orderId', orderResponse.data.order_id);
            return orderResponse.data.order_id;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const addToCart = async (orderId) => {
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
        try {
            let orderId = localStorage.getItem('orderId');
            if (!orderId) {
                orderId = await createOrder();
            }
            await addToCart(orderId);
        } catch (error) {
            console.error('Error in handling add to cart:', error);
        }
    };

    return (
        <button className="Add-To-Cart-BTN rounded-sm my-[20px]" onClick={handleAddToCartClick}>
            Add to cart
        </button>
    );
};

export default Order;
