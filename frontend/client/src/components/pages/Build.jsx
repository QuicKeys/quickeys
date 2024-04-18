import React from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'

function Build() {
    return (
      <>
        <div className="px-[50px] py-[100px]">
          <Reveal>
            <div className="flex justify-center text-[75px] font-medium"> <span className="text-[#00FF8A] pr-[20px]">BUILD</span> PAGE </div>
          </Reveal>
          <Reveal>
            <div className="flex justify-center">[ work in progress ]</div>
          </Reveal>
        </div>
      </>
    )
  }

export default transition(Build);