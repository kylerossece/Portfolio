import React from 'react'
import Card from "./Card"

function Projects() {
  const projects = [
    {id: 1, title: 'Project 1', description: '   Lorem Ipsum is simply dummy text of the printing and ', skills: ['React', 'Tailwind', 'Firebase']},
    {id: 2, title: 'Project 2', description: 'Lorem Ipsum is simply dummy text of the printing and ty', skills: ['React', 'Tailwind', 'Firebase']}
    ,
    {id: 3, title: 'Project 3', description: 'Lorem Ipsum is simply dummy text of the printing and type', skills: ['React', 'Tailwind', 'Firebase']}
  ]

  const projectCards = projects.map((project) => {
    return (
      <Card
           key={project.id} 
           title={project.title} 
           description={project.description} 
           skills={project.skills}  />
    )
  }) 

  return (
    <section className='mt-10 sm:mt-16'>
      <p className='font-semibold text-neutral-800 mb-10 px-4 sm:px-3 '>Projects</p>
      {projectCards}
    </section>
  )
}

export default Projects