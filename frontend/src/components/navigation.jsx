import React from 'react'
import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faRocket} from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './darkmodetoggle';


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  const navController = () => {
    setIsOpen(false);
  }

  return (

    <div className={`flex justify-around items-center text-xs sm:text-sm md:text-md w-full fixed top-0 left-0 bg-white z-20 dark:bg-darkmode pt-5`} data-aos='fade-down' data-aos-duration='1700'>

      <div>
        <a href="/" className='font-semibold text-accent-color'>
        HoopTrack<FontAwesomeIcon icon={faRocket} />
        </a>
      </div>

      <div className={`absolute top-full left-0 w-full bg-darkmode-bg md:bg-transparent text-white md:text-font-color1 md:flex md:relative md:w-auto md:items-center ${isOpen ? 'block ' : 'hidden'}`}>

        <ul className={`flex flex-col items-center md:flex-row font-semibold `}>

              <li className='px-5 py-4 md:py-0  dark:text-white' onClick={navController}>
                  <NavLink to='/' className={({isActive}) => `${isActive ? 'text-accent-color' : ''} text-sm md:text-md md:hover:text-accent-color`}>Home</NavLink>
              </li>

              <li className='px-5 py-4 md:py-0  dark:text-white' onClick={navController}>
                  <NavLink to='/about' className={({isActive}) => `${isActive ? 'text-accent-color' : ''} text-sm md:text-md md:hover:text-accent-color`}>About Us</NavLink>
              </li>

              <li className='px-5 py-4 md:py-0  dark:text-white' onClick={navController}>
                  <NavLink to='/feedback' className={({isActive}) => `${isActive ? 'text-accent-color' : ''} text-sm md:text-md md:hover:text-accent-color`}>Feedback</NavLink>
              </li>

              <li className='px-5 py-4 md:py-0  dark:text-white' onClick={navController}>
                  <NavLink to='/help' className={({isActive}) => `${isActive ? 'text-accent-color' : ''} text-sm md:text-md md:hover:text-accent-color`}>Help</NavLink>
              </li>

          </ul>

      </div>

      <div className='flex items-center gap-3 dark:text-white'>
        <DarkModeToggle />
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} onClick={() => (setIsOpen(!isOpen))} className={`md:hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>

    </div>
  )
  
};

export default Navigation;
