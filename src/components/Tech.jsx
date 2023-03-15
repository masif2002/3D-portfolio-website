import React, { useEffect, useState } from 'react'
import { technologies } from '../constants'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'


const Tech = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    
    window.addEventListener("change", handleMediaQueryChange)

    return () => {
      window.removeEventListener("change", handleMediaQueryChange)
    }

  }, [])

  return ( isMobile ? null : 
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech) => (
        
        <div className="w-28 h-28" key={tech.name}>
           <BallCanvas icon={tech.icon} />
        </div>

      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")