import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'
import { projects } from '../constants'
import Tilt from 'react-tilt'
import { github } from '../assets'
import React from 'react'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name}
          className="w-full h-full object-fit rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <a href={source_code_link} target='blank'>
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </a>
        </div>
        
      </div>

      <div className="flex flex-col justify-between ">
        <div>
          <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
          {name}
          </h3>
          
          <p className="mt-2 text-secondary text-[14px]">
          {description}
          </p>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        
      </div>
    </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

     

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}  
      </div>

        <motion.div className=' flex justify-center w-full mt-20 cursor-pointer' variants={fadeIn('', '', 1.5)}>
          <a href="https://github.com/masif2002?tab=repositories" target='blank' className='hover:scale-110 duration-500' >
            <div className='green-pink-gradient p-[1px] rounded-xl'>
              <div className="bg-tertiary px-8 py-4 rounded-xl text-[22px] tracking-wider uppercase hover:bg-white hover:text-tertiary">
                More Projects ...
              </div>
            </div>
          </a>
        </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "Work")