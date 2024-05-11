import React, { useEffect, useState } from 'react'
import { apiClient } from '../utils/ApiClient';


function AccordionFilter() {
    const [brands, setBrands] = useState([])
    const [types, setTypes] = useState([])
    const [brandOpen, setBrandOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);

    useEffect(() => {
        //Retrieve item brands
        apiClient.get('inventory/item-brand/list')
        .then(response => {
            setBrands(response.data)
        })
        .catch(error => {
            console.error('Error fetching item brands:', error)
        })

        //Retrieve item types
        apiClient.get('inventory/item-type/list')
        .then(response => {
            setTypes(response.data)
        })
        .catch(error => {
            console.error('Error fetching item types:', error)
        })
    }, [])

    return (
        <>
            <div className="w-full py-[30px]">

                <div className={brandOpen ? 'pb-[0px]' : 'pb-[25px]'}>
                    <button onClick={() => setBrandOpen(!brandOpen)} className="flex justify-between w-full">
                        <span className="text-[20px] font-medium">BRAND</span>
                        <div className="flex justify-center items-center h-[30px] w-[30px]">
                            <img className={`Filter-Arrow ${brandOpen ? 'rotate-90' : 'rotate-0'}`} src="/src/assets/icons/ICON - Arrow.png"/>
                        </div>
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-200 text-sm ${
                        brandOpen ? 'grid-rows-[25fr] visible p-[10px]' : 'grid-rows-[0fr] hidden'
                    }`}>
                        {brands.map(brand => (
                            <div className="overflow-hidden px-[30px] text-[18px]" key={brand.item_brand_id}>
                                <div className="flex gap-[10px] py-[7px]">
                                    <input className="checkbox" type="checkbox" id={brand.item_brand_name}/>
                                    <div className="flex justify-center items-center absolute h-[15px] w-[15px] mt-[2.5px] pointer-events-none">
                                        <img className="h-[9px] w-[12px] mt-[0.5px]" src="/src/assets/icons/ICON - Check.png"/>
                                    </div>
                                    <label className="" htmlFor={brand.item_brand_name}> {brand.item_brand_name} </label>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>

                <div className={typeOpen ? 'pb-[0px]' : 'pb-[25px]'}>
                    <button onClick={() => setTypeOpen(!typeOpen)} className="flex justify-between w-full">
                        <span className="text-[20px] font-medium">TYPE</span>
                        <div className="flex justify-center items-center h-[30px] w-[30px]">
                            <img className={`Filter-Arrow ${typeOpen ? 'rotate-90' : 'rotate-0'}`} src="/src/assets/icons/ICON - Arrow.png"/>
                        </div>
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-200 text-sm ${
                        typeOpen ? 'grid-rows-[25fr] visible p-[10px]' : 'grid-rows-[0fr] hidden'
                    }`}>
                        {types.map(type => (
                            <div className="overflow-hidden px-[30px] text-[18px]" key={type.item_type_id}>
                                <div className="flex gap-[10px] py-[7px]">
                                    <input className="checkbox" type="checkbox" id={type.item_type_name}/>
                                    <div className="flex justify-center items-center absolute h-[15px] w-[15px] mt-[2.5px] pointer-events-none">
                                        <img className="h-[9px] w-[12px] mt-[0.5px]" src="/src/assets/icons/ICON - Check.png"/>
                                    </div>
                                    <label className="" htmlFor={type.item_type_name}> {type.item_type_name} </label>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default AccordionFilter