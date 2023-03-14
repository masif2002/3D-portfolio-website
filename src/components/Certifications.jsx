import { motion } from 'framer-motion'
import React from 'react'
import { link } from '../assets'
import { testimonials } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'


const Card = ({ index, testimonial, image, icon, link}) => {
  return(
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} 
    className="bg-black-200 p-7 rounded-3xl xs:w-[350px] w-full" >
    <img src={image}  className='rounded-3xl object-contain' alt='Certificate'/>
    
    <div className="mt-7 flex justify-between items-center gap-1">

      <a className='hover:underline hover:underline-offset-1 cursor-pointer' href={link} target='blank'>
        <p className="text-white font-bold text-[18px] ">
          {testimonial} 
        </p>
      </a>

        <img src={icon} alt='Issuer'
          className="w-10 h-10 rounded-full object-cover bg-white"
        />
      </div>
    </motion.div>
  )
}
const Certifications = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}>

        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            Certifications.
          </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap lg:flex-nowrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Certifications, "")