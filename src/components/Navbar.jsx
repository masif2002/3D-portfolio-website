import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close, pic, linkedin, githubs, twitter } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <div className='flex gap-2 items-center'>

        <Link
          to='/'
          className='flex items-center gap-4'
          onClick={() => {
            setActive('home')
            window.scrollTo(0, 0)
          }}
        >
          <img src={pic} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[20px] font-bold cursor-pointer flex tracking-wider pl-2">
            Mohamed Asif &nbsp;
          </p>
        </Link>

        
        <div className="hidden sm:flex gap-4">
          <a href="https://www.linkedin.com/in/masif2002/">
            <img src={linkedin} alt="linkedin" className='h-5 w-5'/>
          </a>
          <a href="https://github.com/masif2002">
            <img src={githubs} alt="github" className='h-5 w-5'/>
          </a>
          <a href="https://twitter.com/imasiftoo">
            <img src={twitter} alt="twitter" className='h-5 w-5'/>
          </a>
        </div>

      </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-8 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-140px z-10 rounded-xl`}>
            <ul className="list-none flex flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>



      </div>
    </nav>
  )
}

export default Navbar