import React from 'react'

function Nav() {
  return (
    <nav>
        <ul className='flex gap-8 justify-end mr-4 sm:mr-0 cursor-pointer'>
          <li>
            <a href="/">Home</a>
          </li>  
          <li>
          <a href='/about'>About</a>
            </li>   
        </ul>
    </nav>
  )
}

export default Nav