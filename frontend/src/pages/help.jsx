import React from 'react'
import Navigation from '../components/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Help = () => {

  return (
    <>
    <Navigation />
    <div className='flex flex-col items-center justify-center min-h-screen mt-[120px] pb-5 ' data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1000'>

      <div>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold text-accent-color dark:text-white'>You might be wondering...</h1>
      </div>

      {/*---------------------------------1st Question----------------------------------*/}

      <div className='mt-[40px] sm:mt-[60px] flex gap-x-3 px-5 border-b dark:border-b-darkmode-bg' >

        <div>
          <FontAwesomeIcon icon={faCircleQuestion} className='text-font-color2 dark:text-white sm:text-lg' />
        </div>

        <div className='grow'>
          <h2 className='font-semibold text-accent-color text-sm md:text-base'>What is HoopTrack?</h2>
          <p className='py-5 text-sm md:text-base text-font-color2 max-w-xl'>HoopTrack is a simple yet powerful to-do list app designed to help you stay organized, track tasks, and achieve your goals. Whether you are managing daily activities, work tasks, or personal projects, HoopTrack keeps everything in one place.</p>
        </div>

      </div>

      {/*---------------------------------2nd Question----------------------------------*/}

      <div className='mt-[40px] flex gap-x-3 px-5 border-b dark:border-b-darkmode-bg'>

        <div>
          <FontAwesomeIcon icon={faCircleQuestion} className='text-font-color2 dark:text-white sm:text-lg ' />
        </div>

        <div className='grow'>
          <h2 className='font-semibold text-accent-color text-sm md:text-base'>How to make an account in HoopTrack?</h2>
          <p className='py-5 text-sm md:text-base text-font-color2 max-w-xl'>Click the Get Started button in the home section and fill up the necessary information. After that, you can now log in using your registered account.</p>
        </div>

      </div>

      {/*---------------------------------3rd Question----------------------------------*/}

      <div className='mt-[40px] flex gap-x-3 px-5 border-b dark:border-b-darkmode-bg'>

        <div>
          <FontAwesomeIcon icon={faCircleQuestion} className='text-font-color2 dark:text-white sm:text-lg' />
        </div>

        <div className='grow'>
          <h2 className='font-semibold text-accent-color text-sm md:text-base'>Can I use HoopTrack offline?</h2>
          <p className='py-5 text-sm md:text-base text-font-color2 max-w-xl'>At the moment, HoopTrack requires an internet connection to store tasks and updates. We're planning to add offline capabilities in the future.</p>
        </div>

      </div>

      {/*---------------------------------4th Question----------------------------------*/}

      <div className='mt-[40px] flex gap-x-3 px-5 border-b dark:border-b-darkmode-bg'>

        <div>
          <FontAwesomeIcon icon={faCircleQuestion} className='text-font-color2 dark:text-white sm:text-lg' />
        </div>

        <div className='grow'>
          <h2 className='font-semibold text-accent-color text-sm md:text-base'>How do I change the theme or color of the app?</h2>
          <p className='py-5 text-sm md:text-base text-font-color2 max-w-xl'>HoopTrack offers a dark mode option for a better user experience in low-light environments. You can toggle dark mode in the app settings by clicking the moon icon at the top right corner.</p>
        </div>

      </div>

      {/*---------------------------------5th Question----------------------------------*/}

      <div className='mt-[40px] sm:mt-[60px] flex gap-x-3 px-5 border-b dark:border-b-darkmode-bg'>

        <div>
          <FontAwesomeIcon icon={faCircleQuestion} className='text-font-color2 dark:text-white sm:text-lg' />
        </div>

        <div className='grow'>
          <h2 className='font-semibold text-accent-color text-sm md:text-base'>Is there a way to prioritize tasks in HoopTrack?</h2>
          <p className='py-5 text-sm md:text-base text-font-color2 max-w-xl'>Currently, tasks are listed in the order they were added. However, we are working on a future update that will allow you to prioritize tasks and set due dates for better task management.</p>
        </div>

      </div>

    </div>
    </>
  )
};

export default Help;
