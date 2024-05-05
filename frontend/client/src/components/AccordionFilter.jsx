import React, { useState } from 'react'

function AccordionFilter() {
    const [brandOpen, setBrandOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);

    return (
        <>
            <div className="w-full p-[20px]">

                <button onClick={() => setBrandOpen(!brandOpen)} className="flex justify-between w-full">
                    <span>BRAND</span>
                    {brandOpen ? <span>x</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-200 text-sm ${
                    brandOpen ? 'grid-rows-[3fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                    <div className="overflow-hidden px-[50px]">
                        <div className="flex gap-[5px]">
                            <input type="checkbox" id="QuicKeys"/>
                            <label htmlFor="QuicKeys"> QuicKeys </label>
                        </div>
                        <div className="flex gap-[5px]">
                            <input type="checkbox" id="Mark"/>
                            <label htmlFor="Mark"> Mark </label>
                        </div>
                        <div className="flex gap-[5px]">
                            <input type="checkbox" id="Adrianne"/>
                            <label htmlFor="Adrianne"> Adrianne </label>
                        </div>
                    </div>
                </div>

                <button onClick={() => setTypeOpen(!typeOpen)} className="flex justify-between w-full">
                    <span>TYPE</span>
                    {typeOpen ? <span>x</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-200 text-sm ${
                    typeOpen ? 'grid-rows-[3fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                    <div className="overflow-hidden px-[50px]">
                        <div className="flex gap-[5px]">
                            <input type="checkbox" id="Keycaps"/>
                            <label htmlFor="Keycaps"> Keycaps </label>
                        </div>
                        <div className="flex items-center gap-[3px]">
                            <input type="checkbox" id="Switches" className="appearance-none h-[15px] w-[15px] rounded-sm border-[1.5px] border-red-400 hover:border-red-500 checked:bg-QKGreen checked:border-none" />
                            <label htmlFor="Switches"> Switches </label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AccordionFilter