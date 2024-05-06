import React, { useState, useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { apiClient } from '../../utils/ApiClient'
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState(null)
  const [previousPage, setPreviousPage] = useState(null)

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

    return (
      <>
        <div className="py-[100px] px-[15px] nm:px-[50px]">
          <Reveal>
            <section className="flex justify-center w-full">
              <img className="w-[100%] max-w-[1600px]" src="./src/assets/QuicKeys WORDMARK.svg"/>
            </section>
          </Reveal>

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