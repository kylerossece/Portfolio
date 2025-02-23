import React from 'react'
import { FaVuejs, FaReact, FaBootstrap, FaFigma, FaSass   } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


function Skill() {
  const skills = [
        {id: 1, icon: <FaVuejs />, text: "Vue"},
        {id: 2, icon: <FaReact />, text: "React"},
        {id: 3, icon: <FaBootstrap />, text: "Bootstrap"},
        {id: 4, icon: <RiTailwindCssFill  />, text: "Tailwind"},
        {id: 5, icon: <FaFigma  />, text: "Figma"},
        {id: 6, icon: <FaSass   />, text: "SASS"},

  ]

  const skillsArr = skills.map((skill) => {
    return (
      <div className='w-1/2 hover:bg-gray-100 p-4 rounded cursor-pointer'>
          <div className='flex flex-row gap-6 items-center'>
            <div className='text-5xl'>{skill.icon}</div>
            <>{skill.text}</>
            </div>
      </div>
    )
  })

  return (
      <div className='mt-10'>
      <p className='font-semibold text-neutral-800 px-4 mb-4'>Skills</p>
      <div className='flex flex-wrap'>
          {skillsArr}
      </div>
      </div>
  )
}

export default Skill