import React, { useState } from 'react'

function AccordionFilter() {
    const [brandOpen, setBrandOpen] = useState(false);
    return (
        <>
            <div className="bg-red-300 w-full p-[20px] text-[#252525]">
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
                            <label for="QuicKeys"> QuicKeys </label>
                        </div>
                        <div className="flex gap-[5px]">
                            <input type="checkbox" id="Mark"/>
                            <label for="Mark"> Mark </label>
                        </div>
                        <div className="flex gap-[5px]">
                            <input type="checkbox" id="Adrianne"/>
                            <label for="Adrianne"> Adrianne </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionFilter