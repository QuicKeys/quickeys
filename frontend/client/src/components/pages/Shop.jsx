import React, { useState, useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { apiClient } from '../../utils/ApiClient'


function Shop() {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState(null)
  const [previousPage, setPreviousPage] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await apiClient.get(`inventory/item/list/?page=${currentPage}`)
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

    return (
      <>
        <div className="px-[50px] py-[100px]">
          {/* <Reveal>
            <div className="flex justify-center text-[75px] font-medium"> <span className="text-[#00FF8A] pr-[20px]">SHOP</span> PAGE </div>
          </Reveal>
          <Reveal>
            <div className="flex justify-center">[ work in progress ]</div>
          </Reveal> */}

          <Reveal>
            <section className="flex justify-center w-full">
              <img className="max-w-[90%]" src="./src/assets/QuicKeys WORDMARK.svg"/>
            </section>
          </Reveal>

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 nm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[45px] relative">
              {items.map(item => (
                <Reveal key={item.item_id}>
                  <div className="group flex flex-col h-[400px] w-[300px]">
                    <div className="ItemCard-Image" alt={`${item.item_name} image`}>
                      <img
                        className="transition-all duration-500 p-[25px] group-hover:scale-105"
                        src={item.item_profile_picture_link}>
                      </img>
                    </div>
                    <p className="ItemCard-Name group-hover:underline" alt={`${item.item_name}`}>{item.item_name}</p>
                    <p className="ItemCard-Brand" alt={`${item.item_brand.item_brand_name}`}>{item.item_brand.item_brand_name}</p>
                    <p className="ItemCard-Price" alt={`${item.item_price}`}>₱{parseFloat(item.item_price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>
                </Reveal>
              ))}
              <div className="absolute top-0 left-0 transform">
                <p>test</p>
              </div>
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