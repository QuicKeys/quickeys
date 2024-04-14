import React from 'react'
import { Reveal } from '../Reveal'

function Shop() {
    return (
      <>
        <div className="px-[50px] py-[100px]">
          <Reveal>
            <div className="flex justify-center text-[75px] font-medium"> <span className="text-[#00FF8A] pr-[20px]">SHOP</span> PAGE </div>
          </Reveal>
          <Reveal>
            <div className="flex justify-center">[ work in progress ]</div>
          </Reveal>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-3 gap-[25px]">

                {/* ITEM */}
                <Reveal>
                  <div className="flex flex-col h-[400px] w-[300px]">
                    <div className="ItemCard-Image" alt="Item Image">
                      [ Missing Item Image. ]
                    </div>
                    <p className="ItemCard-Name" alt="Item Name">QuicKeys™ Master Keyboard Building Kit V2 Blue</p>
                    <p className="ItemCard-Brand" alt="Item Brand">QuicKeys™ Keyboards</p>
                    <p className="ItemCard-Price" alt="Item Price">₱2,195</p>
                  </div>
                </Reveal>

            </div>
          </div>
        </div>
      </>
    )
  }

export default Shop