import React from 'react'

const ScrollableDiv = ({ items }) => {
  return (
    <div className='max-h-60 overflow-y-auto border border-gray-300 p-4'>
        <ul>
            {items.map((item, index) => (
                <li key={index}>Order on {new Date(item.order_date).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit'
                  })}</li>
            ))}
        </ul>
    </div>
  )
}

export default ScrollableDiv