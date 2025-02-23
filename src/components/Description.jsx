import React from 'react'
import { FaGithub, FaLinkedin,  FaEnvelope  } from "react-icons/fa";


function Description() {
    const icons = [
                    {id: 1, icon: <FaGithub />, link: "https://github.com/kylerossece"},
                    {id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kyle-ross-prestado/"},
                    {id: 3, icon: <FaEnvelope   />, link: "https://www.linkedin.com/in/kyle-ross-prestado/"},
    ]
    const iconsArr = icons.map((icon) => {
        return (
            <a target="_blank" href={icon.link}>{icon.icon}</a>
        )
    })
    
  return (
    <div className='flex flex-col mt-12 space-y-8 px-4'>
          <div>
            <img src="src/assets/Profile.jpg" alt="Profile" className='rounded-full w-24' />
            <div className='font-semibold text-neutral-800 mt-4'>Kyle Prestado</div>
              <div className='mt-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </div>

          </div>
          <div className='flex gap-6 text-2xl'>
                {iconsArr}
          </div>
        </div>
  )
}

export default Description