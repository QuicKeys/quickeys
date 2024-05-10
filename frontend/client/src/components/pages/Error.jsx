import React from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'

function Error() {
    return (
      <>
        <div className="px-[50px] py-[100px]">
          <Reveal>
            <div className="flex justify-center text-[75px] font-medium text-[#00FF8A]"> ERROR </div>
          </Reveal>
          <Reveal>
            <div className="flex justify-center">[ work in progress ]</div>
          </Reveal>
        </div>
      </>
    )
  }

export default transition(Error);