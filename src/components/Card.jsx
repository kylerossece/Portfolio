import React from 'react'

function Card({title,description,skills}) {
  const skillsArr = skills.map((item, index) => {
    return (
      <span>{index === skills.length - 1 ? item : item + ","}</span>
    )
  })
  
  return (
    <div className='rounded hover:bg-gray-100 cursor-pointer p-4 mb-0 sm:mb-2 flex flex-col space-y-2 '>
      <p className='font-semibold text-neutral-800'>{title}</p>
      <p>{description}</p>
      <div className='flex flex-row italic text-sm'>
      <span className='mr-1'>Technologies:</span><span>{skillsArr}</span>
      </div>
    </div>
  )
}

export default Card