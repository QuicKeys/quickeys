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
            <div className="px-[50px] py-[100px]">
                <Reveal>
                    <div className="flex justify-center text-[75px] font-medium">
                    <span className="text-[#00FF8A] pr-[20px]">ITEM</span> PAGE
                    </div>
                </Reveal>

                {item ? (
                    <div className="flex flex-col items-center">
                        <Reveal>
                            <div className="group flex flex-col max-h-[400px] max-w-[300px]">
                                <p>{item.item_id}</p>
                                <p>{item.item_type.item_type_id}</p>
                                <p>{item.item_type.item_type_name}</p>
                                <p>{item.item_name}</p>
                                <div className="ItemCard-Image" alt={`${item.item_name} image`}>
                                    <img
                                        className="transition-all duration-500 p-[25px] group-hover:scale-105"
                                        src={item.item_profile_picture_link}>
                                    </img>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default transition(Item);