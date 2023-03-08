import React from 'react'
import { technologies } from '../constants'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'


const Tech = () => {
  return (
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