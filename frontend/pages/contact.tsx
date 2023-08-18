import Header from '@/components/Header/Header'
import TicTacToe from '@/components/TicTacToe'
import React from 'react'

export default function contact() {
  return (
    <>
        <Header />
        <section className='contact'>
          <h1 className='contact-title headline headline-md'>Contact Me !</h1>
          <div className="contact-content">
            <div className="contact-content__texte body body-light">
              <div className="contact-bloc mail">
                <h3 className='body-contact'>Mail</h3>
                <a href="mailto:kevin.lacroix@hetic.net">
                kevin.lacroix@hetic.net
                </a>
              </div>
              <div className="contact-bloc phone">
                <h3 className='body-contact'>Phone</h3>
                <a href="tel:+33635455551">
                +33635455551
                </a>
              </div>
              <div className="contact-bloc mail">
                <h3 className='body-contact'>where to find me or dm me !</h3>
                <a href="">
                  github - klacroix-hub 
                </a><br/>
                <a href="mailto:kevin.lacroix@hetic.net">
                  linkedin - @kevin lacroix
                </a>
              </div>
            </div>
            <div className="contact-content__game">
              <TicTacToe />
            </div>
          </div>
        </section>
    </>
  )
}
