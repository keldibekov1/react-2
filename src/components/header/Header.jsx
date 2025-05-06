import React from 'react'

const Header = () => {
  return (
    <header className='absolute w-full'>
      <div className="container mx-auto ">
        <nav className='h-[74px] flex items-center justify-between  text-white'>
          <h1>Escape.</h1>
          <ul className='flex gap-10 uppercase'>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Categories</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header