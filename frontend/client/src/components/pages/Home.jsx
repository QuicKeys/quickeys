import React from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'

function Home() {
    return (
      <>

        <div className="px-[50px] py-[100px]">
          <Reveal>
            <div className="flex justify-center text-[75px] font-medium"> <span className="text-[#00FF8A] pr-[20px]">HOME</span> PAGE </div>
          </Reveal>
          <Reveal>
            <div className="flex justify-center">[ work in progress ]</div>
          </Reveal>
        </div>

        <Reveal>
          <section className="flex justify-center w-full">
            <img className="max-w-[1500px]" src="./src/assets/QuicKeys WORDMARK.svg"/>
          </section>
        </Reveal>

      </>
    )
  }

export default transition(Home);