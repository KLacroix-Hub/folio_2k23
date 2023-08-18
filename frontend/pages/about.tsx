import Header from '@/components/Header/Header'
import Image from 'next/image'
import React, { useState } from 'react'

export default function About() {
  const [isStart, setIsStart] = useState(false)
  return (  
    <>
        <Header />
        <section className="about">
          <div className="about-heading">
            <h1 className="about-title headline headline-md">About</h1>
            <p className='body body-xxs'>
            To discover more about me and my lifetime start the experience by clicking on button at bottom left of screen.
            </p>
          </div>
          <div className={isStart ? "about-three isActive" : "about-three"}>
            {isStart && <canvas className='game'></canvas>}
            {!isStart && 
              <Image 
                src={"/test-game-bg.png"}
                alt="test-game-bg"
                width={1300}
                height={1000}
              />
          }
            <div className="about-three__start"
            onClick={() => setIsStart(!isStart)}
            >
              <h2 className="about-three__start-title body body-xxs">Start experience</h2>
              <span className="about-three__start-togo">
                <Image
                src={"/arrowGo.svg"}
                alt="arrowGo"
                width={10}
                height={10}
                />
              </span>
            </div>
          </div>
        </section>
    </>
  )
}
