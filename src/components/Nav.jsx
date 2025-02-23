import React from 'react';



function Nav() {
  const links = ["Home", "About"]

  const linksArr = links.map((link) => {
    return (
      <li className="relative group">
      <a href={link === 'Home' ? '/' : '/about'} >{link}</a>
      <span className="absolute left-0 bottom-0 block w-full h-[1px] bg-neutral-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </li>
    )
  })
  return (
    <nav>
      <ul className='flex gap-8 justify-end mr-4 sm:mr-0 cursor-pointer'>
        {linksArr}
      </ul>
    </nav>
  );
}

export default Nav;
