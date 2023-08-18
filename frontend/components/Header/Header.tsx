import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={"header"}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={61}
          height={20}
          className='header-logo'
        />
      </Link>

      <div
        onClick={handleOpen}
        className={menuOpen ? 'header-burger close' : 'header-burger'}>
          <span></span>
      </div>

      <div className={menuOpen ? "header-menu open": "header-menu"}>
      <div className="header-menu__links">
        <Link className='link headline headline-sm' href='/projects'>Projects</Link>
        <Link className='link headline headline-sm' href='/about'>About</Link>
        <Link className='link headline headline-sm' href='/contact'>Contact</Link>
      </div>

      <div className="header-menu__social body body-regular">
        <a className="body body-regular" href="https://github.com/KLacroix-Hub" target="_blank" rel="noopener noreferrer">GitHub </a>
        {" / "}
        <a className="body body-regular" href="https://www.linkedin.com/in/kevin-lacroix/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>

    </div>
    </div>
  )
}