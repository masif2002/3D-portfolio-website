import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='violet-gradient w-1 sm:h-80 h-40'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Asif</span>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I love to explore and experiment <br className='sm:block hidden'/> with new technologies 
            </p>
          </h1>
        </div>
        
      </div>
      
      <ComputersCanvas />
    </section>
  )
}

export default Hero