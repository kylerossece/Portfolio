import React from 'react'

function Card({title,description,skills}) {
  // const skills = skills.map((skills) => (skills))
  return (
    <div className='rounded hover:bg-gray-100 cursor-pointer p-4 mb-0 sm:mb-2 flex flex-col space-y-2 '>
      <p className='font-semibold text-neutral-800'>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default Card