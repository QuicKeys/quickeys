import React from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import QKSwitch from '../QKSwitch';

function Home() {
    return (
      <>
        <section className="py-[100px] px-[25px] nm:px-[50px]">
          <Reveal>
            <section className="flex justify-center w-full">
              <img className="w-[100%] max-w-[1600px]" src="./src/assets/QuicKeys WORDMARK.svg"/>
              <QKSwitch/>
            </section>
          </Reveal>
        </section>
      </>
    )
  }

export default transition(Home);