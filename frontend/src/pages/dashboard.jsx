import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/navigation';

const Dashboard = () => {
  
  return (  
    
    <>
    <Navigation />

    <div className='flex flex-col justify-center items-center bg-main min-h-screen dark:bg-darkmode'>

      <div className='flex flex-col items-center text-lg sm:text-[28px] font-bold leading-[24px] sm:leading-[32px] md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[54px] text-center' data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1000'>
        <h2 className='dark:text-white'>Productivity make simple</h2>
        <h2 className='text-accent-color'>Keep track of what matter most</h2>
      </div>
      
      <div className='max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] text-center text-font-color2 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl pt-1' data-aos='fade-up' data-aos-duration='1700' data-aos-delay='1200'>
        <p>HoopTrack is a simple task manager designed to help you stay on top of your goals.</p>
      </div>

      <div className='flex flex-col items-center sm:flex-row sm:gap-x-5' data-aos='fade-up' data-aos-duration='1700' data-aos-delay='1400'>
        
        <NavLink to={'/signup'}>
          <button className='mt-5 p-3 sm:p-4 text-sm md:text-md lg:text-base w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] bg-accent-color text-white opacity-80 hover:opacity-100 shadow-md'>
            Sign Up
          </button>
        </NavLink>

        <NavLink to={'/signin'}>
          <button className='mt-5 p-3 sm:p-4 text-sm md:text-md lg:text-base w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] border border-accent-color text-accent-color relative group overflow-hidden hover:text-white'>
          <span className="absolute inset-0 bg-accent-color transition-transform translate-x-full group-hover:translate-x-0 duration-300"></span>
          <span className="relative z-10">Sign in</span>
          </button>
        </NavLink>
      </div>

    </div>
    </>

  )
};

export default Dashboard;
