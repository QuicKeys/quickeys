import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClient } from '../../utils/ApiClient';

function Item() {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await apiClient.get(`/inventory/item/view/${itemId}/`);
                if (response.data && typeof response.data === 'object') {
                    setItem(response.data);
                    console.log('Received data successfully')
                } else {
                    console.error('Received data is not in expected format:', response.data);
                    setItem(null);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setItem(null);
            }
        };
    
        fetchItem();
    }, [itemId]);

    return (
        <>
            <div className="px-[15px] py-[100px]">

                {item ? (
                    <div className="flex flex-col items-center">
                        <div className="flex gap-[25px] justify-center flex-col nm:flex-row">

                            <div className="ItemCard-Image-View" alt={`${item.item_name} image`}>
                                <Reveal>
                                    <img
                                        className="transition-all duration-500 p-[5%] hover:scale-105"
                                        src={item.item_profile_picture_link}>
                                    </img>
                                </Reveal>
                            </div>
                            <div>
                                <Reveal>
                                    <p className="text-[30px] font-semibold nm:max-w-[500px]">{item.item_name}</p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-QKGreen">{item.item_brand.item_brand_name}</p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-[40px] font-semibold py-[20px]">₱{parseFloat(item.item_price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-MainText/50">Qty.</p>
                                </Reveal>
                            </div>
                                
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

            </div>
        </>
    );
}

export default transition(Item);