import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff"}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
        <img src={experience.icon} 
        alt={experience.company_name} />
    }
  >
  <div>
    <h3 className="text-white font-bold text-[24px]">
      {experience.title}
    </h3>
    <p className="text-secondary font-semibold"
    style={{ margin: 0 }}>
      {experience.company_name}
    </p>
  </div>

  <ul className="mt-5 list-disc ml-5 space-y-2">
  {experience.points.map((point, index) => (
    <li
      key={`experience-point-${index}`}
      className="text-white-100 text-[14px] pl-1 tracking-wider"
    >
      {point}
    </li>
  ))}
</ul>
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>
          What have I worked on So far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>

      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}


        </VerticalTimeline>
      </div>

     
    </>
  )
}

export default SectionWrapper(Experience, "work")