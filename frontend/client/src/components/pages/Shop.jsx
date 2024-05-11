import React, { useState, useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { apiClient } from '../../utils/ApiClient'
import { Link } from 'react-router-dom';
import AccordionFilter from '../AccordionFilter';

function Shop() {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState(null)
  const [previousPage, setPreviousPage] = useState(null)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [filterOpen, setFilterOpen] = useState(false);
  const [tempSelectedFilters, setTempSelectedFilters] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await apiClient.get(`inventory/item/shop-list/?page=${currentPage}`)
        setItems(response.data.results)
        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchItems()
  }, [currentPage])

  const goToNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (previousPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  const toggleFilter = () => {
    let apiUrl = `inventory/item/shop-list/?page=${currentPage}`

    if (selectedBrands.length > 0) {
      apiUrl += `&item_brand=${selectedBrands.join(',')}`
    }

    if (selectedTypes.length > 0) {
      apiUrl += `&item_type=${selectedTypes.join(',')}`
    }

    apiClient
    .get(apiUrl)
    .then(response => {
      setItems(response.data.results);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    })
    .catch(error => {
      console.error('Error fetching filtered data:', error);
    })

    // MAPPING OF SELECTED FILTERS
    let selectedFilters = '';

    if (selectedBrands.length > 0) {
      selectedFilters += `Brands: ${selectedBrands.join(', ')}`;
    }

    if (selectedTypes.length > 0) {
      selectedFilters += `${selectedFilters.length > 0 ? ' | ' : ''}Types: ${selectedTypes.join(', ')}`;
    }

    setTempSelectedFilters(selectedFilters);
    setFilterOpen(!filterOpen);
  };

  return (
      <>
        <div className={`Filter-Overlay delay-200 duration-1000 ${filterOpen ? 'opacity-1 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} onClick={toggleFilter}/>
        <section className="flex justify-center w-full">
                <div className="bg-[#252525] bg-opacity-50 flex flex-col justify-end items-center w-full py-[50px] px-[25px] nm:px-[50px]">
                    <p className="flex justify-center lg:justify-start w-full max-w-[1600px] pt-[50px] text-QKGreen text-[60px] font-semibold">
                        SHOP
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

        <section className="px-[25px] nm:px-[50px] my-[50px]">
                <div className="flex flex-col items-center w-full">
                    <div className="flex w-full max-w-[1600px] justify-between">

                        <button className="flex items-center gap-2" onClick={toggleFilter}>
                            <img className="Filter-Icon" src="./src/assets/icons/ICON - Filter.png"/>
                            <p className="font-medium text-QKGreen hover:underline">Filter & Sort</p>
                        </button>

                        {/* Display selected filters */}
                        <p className="text-MainText/50 font-medium mt-[-5px]">{tempSelectedFilters}</p>
                        
                        <div className={`Filter-Side ease-in-out delay-200 duration-1000 flex flex-col justify-between h-full 
                        ${filterOpen ? 'bottom-[0%] sm:right-[0%] opacity-1 transition-all' : 'bottom-[-200%] opacity-0 sm:bottom-0 sm:right-[-200%]'}
                        `}>
                            <div>
                              <div className="flex justify-between w-full">
                                  <div>
                                      <p className="text-QKGreen text-[25px] font-medium">Filter & Sort</p>
                                      <p className="text-MainText/50 font-medium mt-[-5px]">{items.length} Items</p>
                                  </div>
                                  <img className="h-[30px] opacity-50 hover:opacity-100" onClick={toggleFilter} src="/src/assets/icons/ICON - Close.png"/>
                              </div>
                              <AccordionFilter
                                selectedBrands={selectedBrands}
                                setSelectedBrands={setSelectedBrands}
                                selectedTypes={selectedTypes}
                                setSelectedTypes={setSelectedTypes}
                              />
                            </div>
                            <div className="flex justify-end w-full">
                              <button className="Filter-Apply-BTN" onClick={toggleFilter}>
                                Apply
                              </button>
                            </div>
                        </div>

                        <div className={`Overlay transition-all duration-500 ${filterOpen ? 'opacity-1 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} onClick={toggleFilter}/>
                        <div>{items.length} Items</div>
                    </div>
                </div>
        </section>

        <div className="pb-[100px] px-[15px] nm:px-[50px]">
          <div className="flex flex-col items-center">
            <div className="ItemCard-Responsiveness grid gap-[30px] relative">
              {items.map(item => (
                <Reveal key={item.item_id}>
                  <div className="group flex flex-col max-h-[450px] max-w-[300px]">
                    <Link to={`/Item/${item.item_id}`} alt={`${item.item_name}`}>
                      <div className="ItemCard-Image-Shop" alt={`${item.item_name} image`}>
                        <img
                          className="transition-all duration-500 p-[5%] group-hover:scale-105"
                          src={item.item_profile_picture_link}>
                        </img>
                      </div>
                      
                      <p className="ItemCard-Name group-hover:underline" >{item.item_name}</p>
                    </Link>
                    <p className="ItemCard-Brand" alt={`${item.item_brand.item_brand_name}`}>{item.item_brand.item_brand_name}</p>
                    <p className="ItemCard-Price" alt={`${item.item_price}`}>₱{parseFloat(item.item_price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className='flex justify-center'>
              {previousPage && <button onClick={goToPreviousPage}>Previous Page</button>}
              {nextPage && <button onClick={goToNextPage}>Next Page</button>}
            </div>
          </Reveal>
        </div>
      </>
  )
}

export default transition(Shop);