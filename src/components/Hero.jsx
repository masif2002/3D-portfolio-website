import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { linkedin, githubs } from '../assets'

const Hero = () => {

  return (
    <section className="relative w-full sm:h-screen min-h-[400px] mx-auto">
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

      <div className="absolute top-[320px] justify-center w-full sm:hidden flex gap-8">
          <a href="https://www.linkedin.com/in/masif2002/">
            <img src={linkedin} alt="linkedin" className='h-10 w-10'/>
          </a>
          <a href="https://github.com/masif2002">
            <img src={githubs} alt="linkedin" className='h-10 w-10'/>
          </a>
        </div>
      
      <ComputersCanvas />

      <div className="absolute hidden sm:flex bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate = {{
                y: [0, 24, 0]
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className = "w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero