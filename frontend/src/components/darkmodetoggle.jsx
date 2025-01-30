import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const DarkModeToggle = () => {

    const [darkmode, setDarkmode] = useState(() => {
        return localStorage.getItem('darkmode') === 'true';
      });
    
      useEffect(() => {
    
        localStorage.setItem('darkmode', darkmode);
    
        if(darkmode){
          document.documentElement.classList.add('dark');
        }else{
          document.documentElement.classList.remove('dark');
        }
      }, [darkmode]);
    
      const toggleDarkMode = () => {
        setDarkmode((prevMode) => !prevMode);
      };


  return (
    <button className='text-md dark:text-white' onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkmode ? faSun : faMoon} className='hover:text-accent-color' />
    </button>
  )
};

export default DarkModeToggle;
