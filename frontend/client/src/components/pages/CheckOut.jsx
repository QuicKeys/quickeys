import React from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { NavLink } from 'react-router-dom'

function CheckOut() {
    return (
        <>
            <div>
                <div className="flex flex-col md:flex-row justify-center gap-1 w-full h-full mt-[100px] mx-[15px]">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="rounded-md w-[750px]">
                            <div className="pt-[20px] pb-[5px]">
                                <div className="h-[50px] w-[400px] text-[#FFFFFF] text-[20px] font-medium  flex items-center 
                                    justify-center"> &larr; QuicKeys [TEST MODE]
                                </div>
                            </div>
                            <div className="mx-[109px] text-[20px] my-[10px]">Pay QuicKeys</div>
                            <div className="mx-[109px] text-[35px]">₱69.69</div>

                            <div className="h-[20px]"/>
                        
                            <div class="w-full max-w-[1200px]">
                                <div class="w-[750] h-full flex items-center justify-center">
                                    <div class="gap-[10px] w-[531px]">
                                        <div class="flex flex-cols-2 gap-[12px] sm:gap-[20px]">
                                            <div class="ItemCard-Image-Check-Out">
                                                <NavLink>
                                                    <img
                                                        class="transition-all duration-500 p-[5%] hover:scale-105"
                                                        src="https://as2.ftcdn.net/v2/jpg/02/92/10/55/1000_F_292105519_u3HH8YP3avXkFi8vysLM4I69GuPC8ltt.jpg"
                                                    />
                                                </NavLink>
                                            </div>
                                            <div class="flex justify-between w-full">
                                                <div>
                                                    <p>EXAMPLE</p>
                                                    <p>Qty. 3</p>
                                                </div>
                                                <div>₱69.69</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[20px]"/>

                            <div class="flex justify-between">
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                        Subtotal
                                    </div>
                                </div>
                                <div class="mx-[109px] text-[20px]">
                                    <div>
                                    ₱69.69
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
                                        ₱69.69
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
                        <div className="flex h-[30px] w-[400px] my-[5px]">
                            Email: markclarde28@gmail.com
                        </div>
                        <div className="h-full w-[400px] flex flex-col my-[10px]">
                            <div className="flex h-[30px] w-[400px]">
                                Shipping Address
                            </div>
                            <div className="ml-2 border-2 border-black rounded-md overflow-hidden">
                                <p className="border-b-2 border-black p-2">Name: Mark Clarde</p>
                                <p className="border-b-2 border-black p-2">Philippines</p>
                                <p className="p-2">Address</p>
                            </div>
                        </div>
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
                                text-[20px] font-medium rounded-lg"> Pay ₱69.69
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default transition(CheckOut);
