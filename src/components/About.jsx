import React from 'react'
import Nav from "./Nav"

function About() {
  return (
    <div className="h-screen mx-auto max-w-2xl w-full py-8 sm:py-24 tracking-wider text-neutral-700  font-mono">
        <Nav />
        <div className='flex flex-col mt-12 space-y-8 px-4'>
          <div>
            <img src="src/assets/Profile.jpg" alt="Profile" className='rounded-full w-24' />
              <div className='mt-8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </div>

          </div>
          <div>

          </div>
        </div>
        </div>
  )
}

export default About