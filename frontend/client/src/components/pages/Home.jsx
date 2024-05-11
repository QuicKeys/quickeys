import React from 'react';

import { Reveal } from '../Reveal';
import transition from '../Transition';

import BuildButton from '../BuildButton';

import QKSwitch from '../QKSwitch';
function Home() {
    return (
        <>
            <section className="w-[100%] pt-[100px] px-[15px] nm:px-[50px] min-h-[1000px] overflow-hidden">

                <Reveal>
                    <div className="relative flex justify-center w-full z-[-10]">
                        <img className="w-[100%] max-w-[1600px]" src="./src/assets/QuicKeys WORDMARK.svg" alt="QuicKeys WORDMARK" />
                        <div className="absolute top-0 left-0 right-0 lg:right-[-550px] flex justify-center z-[-2] opacity-20 transition-all duration-500">
                            <img className="w-[100%] max-w-[1200px] scale-[110%]" src="./src/assets/QuicKeys LOGOMARK [BG].svg" alt="QuicKeys LOGOMARK" />
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] max-w-[1600px] lg:px-[100px]">
                            <div className="Hero-Mobile lg:text-left lg:max-w-[550px] lg:text-[25px] z-[-10]">
                                <p>
                                    Ready to build the ultimate typing experience? Explore diverse range of keyboard components and accessories with QuicKeys today!
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] pt-[35px] max-w-[1600px] justify-center lg:justify-start lg:px-[100px] z-2">
                            <BuildButton/>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] pt-[50px] lg:pt-[100px] max-w-[1600px] gap-[12px] justify-center lg:justify-start lg:px-[100px]">
                            <a href="https://github.com/QuicKeys" target="-"><img className="Icon" src="./src/assets/icons/ICON - Github.png" alt="Github"></img></a>
                            <a href="https://discord.gg/TW2QBe3pWR" target="-"><img className="Icon" src="./src/assets/icons/ICON - Discord.png" alt="Discord"></img></a>
                            <a href="https://www.facebook.com/QuicKeysPH" target="-"><img className="Icon" src="./src/assets/icons/ICON - Facebook.png" alt="Facebook"></img></a>
                            <a href="https://X.com" target="-"><img className="Icon" src="./src/assets/icons/ICON - X.png" alt="X"></img></a>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <QKSwitch/>
                </Reveal>


                <Reveal>
                    <div className="flex w-full justify-center mb-[100px]">
                        <div className="gap-[35px] max-w-[1600px] grid grid-cols-1 md:grid-cols-3">
                            <div className="Benefits text-QKGreen">
                                <div className="Hero-Icon-Hollow">
                                    <img className="flex" src="./src/assets/icons/ICON - 1.png"/>
                                </div>
                                <div>
                                    <p className="text-[30px] font-semibold mb-[5px] md:mb-[10px]">Hassle-Free</p>
                                    <p>
                                        Experience hassle-free transactions, ensuring seamless shopping from start to finish. 
                                        Enjoy streamlined processes for confident and convenient shopping, 
                                        free from unnecessary complications.
                                    </p>
                                </div>
                            </div>
                            <div className="Benefits text-QKGreen">
                                <div className="Hero-Icon-Hollow">
                                    <img className="flex" src="./src/assets/icons/ICON - 2.png"/>
                                </div>
                                <div>
                                    <p className="text-[30px] font-semibold mb-[5px] md:mb-[10px]">Easy Return</p>
                                    <p>
                                        Simplified returns for stress-free shopping. 
                                        Enjoy a hassle-free process that ensures convenience, making exchanges and refunds easy. 
                                        Experience seamless transactions with us.
                                    </p>
                                </div>
                            </div>
                            <div className="Benefits bg-QKGreen text-BGMain font-medium">
                                <div className="Hero-Icon-Fill">
                                    <img className="flex" src="./src/assets/icons/ICON - 3.png"/>
                                </div>
                                <div>
                                    <p className="text-[30px] font-semibold mb-[5px] md:mb-[10px]">Best Prices</p>
                                    <p>
                                        Discover unbeatable value with our competitively priced products. 
                                        We strive to offer the best deals to ensure your satisfaction. 
                                        Enjoy top-quality items at affordable rates with QuicKeys!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </section>

            <section className="flex justify-center w-full mb-[100px]">
                <div className="bg-[#252525] bg-opacity-50 flex flex-col justify-center items-center w-full py-[50px] px-[25px] nm:px-[50px]">
                    <p className="flex justify-center lg:justify-start w-full max-w-[1600px] text-QKGreen text-[60px] font-semibold">
                        NEW ARRIVALS
                    </p>
                    <div className="flex justify-center lg:justify-start w-full max-w-[1600px] opacity-50">
                        <p className="max-w-[600px]">
                            <span className="font-medium">DISCLAIMER:</span> QuicKeys™ is an independent reseller and is not affiliated 
                            with the brands or their authorized distributors. 
                            Products listed in our catalog are sourced independently.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default transition(Home);
