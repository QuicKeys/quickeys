import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import { apiClient } from '../../utils/ApiClient';

function Item() {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    const [quantity, setQuantity] = useState(1);

    const quantityADD = () => {
        if(quantity != 25 && quantity < 25) {
            setQuantity(quantity + 1);
        }
    }
    const quantitySUBTRACT = () => {
        if(quantity != 1 && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

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
                    <div className="flex flex-col items-center nm:pt-[40px]">
                        <div className="flex justify-center flex-col nm:flex-row">

                            <div className="ItemCard-Image-View">
                                <div className="absolute left-0 top-[-40px] text-sm opacity-0 nm:opacity-100">
                                    <div className="flex items-center gap-[10px]">
                                        <NavLink to="/" className="opacity-50 hover:opacity-75 cursor-pointer">Home</NavLink>
                                        <img className="max-h-[6.5px] opacity-50" src="/src/assets/icons/ICON - Arrow.png"/>
                                        <NavLink to="/Shop" className="opacity-50 hover:opacity-75 cursor-pointer">Shop</NavLink>
                                        <img className="max-h-[6.5px] opacity-50" src="/src/assets/icons/ICON - Arrow.png"/>
                                        <p className="opacity-100 cursor-pointer">{item.item_type.item_type_name}</p>
                                    </div>
                                </div>
                                <div alt={`${item.item_name} image`}>
                                    <Reveal>
                                        <img
                                            className="transition-all duration-500 p-[5%] hover:scale-105"
                                            src={item.item_profile_picture_link}>
                                        </img>
                                    </Reveal>
                                </div>
                            </div>
                            <div className="pt-[25px] nm:pl-[25px] nm:pt-[0px] nm:max-w-[50%]">
                                <Reveal>
                                    <p className="text-[30px] font-semibold">{item.item_name}</p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-QKGreen my-[5px]">{item.item_brand.item_brand_name}</p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-[35px] font-semibold my-[10px]">₱{parseFloat(item.item_price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-MainText/50">Qty.</p>
                                </Reveal>
                                <Reveal>
                                    <div className="flex items-center">
                                        <div className="Quantity-Box rounded-sm my-[5px]">
                                            <button onClick={quantitySUBTRACT}>
                                                <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - SUBTRACT.png"/>
                                            </button>
                                            <p className="absolute top-[2px]">{quantity}</p>
                                            <button onClick={quantityADD}>
                                                <img className="min-w-[10px] w-[10px] opacity-50" src="/src/assets/icons/ICON - ADD.png"/>
                                            </button>
                                        </div>
                                        <p className="text-MainText/50 ml-[10px]">25 items left</p>
                                    </div>
                                </Reveal>
                                <Reveal>
                                    <button className="Add-To-Cart-BTN rounded-sm my-[20px]">
                                        Add to cart
                                    </button>
                                </Reveal>
                                <div className="max-w-[700px]">
                                    <Reveal>
                                        <p className="text-MainText/75 mt-[50px]">
                                            [ ITEM DESCRIPTION ]
                                        </p>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-MainText/75 mt-[20px]">
                                            <span className="font-medium">DISCLAIMER:</span> QuicKeys™ is an independent reseller and is not affiliated 
                                            with the brands or their authorized distributors. 
                                            Products listed in our catalog are sourced independently.
                                        </p>
                                    </Reveal>
                                </div>
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