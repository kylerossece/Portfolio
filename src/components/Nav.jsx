import React from 'react';

function Nav() {
  return (
    <nav>
      <ul className='flex gap-8 justify-end mr-4 sm:mr-0 cursor-pointer'>
        <li className="relative group">
          <a href="/" >Home</a>
          <span className="absolute left-0 bottom-0 block w-full h-[1px] bg-neutral-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <a href='/about'>About</a>
          <span className="absolute left-0 bottom-0 block w-full h-[1px] bg-neutral-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
