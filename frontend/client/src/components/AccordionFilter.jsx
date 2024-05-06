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
            <div className="w-full p-[20px]">

                <button onClick={() => setBrandOpen(!brandOpen)} className="flex justify-between w-full">
                    <span>BRAND</span>
                    {brandOpen ? <span>x</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-200 text-sm ${
                    brandOpen ? 'grid-rows-[3fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                    {brands.map(brand => (
                        <div className="overflow-hidden px-[50px]" key={brand.item_brand_id}>
                            <div className="flex gap-[5px]">
                                <input type="checkbox" id={brand.item_brand_name}/>
                                <label htmlFor={brand.item_brand_name}> {brand.item_brand_name} </label>
                            </div>
                        </div> 
                    ))}
                </div>

                <button onClick={() => setTypeOpen(!typeOpen)} className="flex justify-between w-full">
                    <span>TYPE</span>
                    {typeOpen ? <span>x</span> : <span>+</span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-200 text-sm ${
                    typeOpen ? 'grid-rows-[3fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                    {types.map(type => (
                        <div className="overflow-hidden px-[50px]" key={type.item_type_id}>
                            <div className="flex gap-[5px]">
                                <input type="checkbox" id={type.item_type_name}/>
                                <label htmlFor={type.item_type_name}> {type.item_type_name} </label>
                            </div>
                        </div> 
                    ))}
                </div>

            </div>
        </>
    )
}

export default AccordionFilter