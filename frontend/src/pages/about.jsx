import React from 'react'
import Navigation from '../components/navigation';

const AboutUs = () => {

  return (
    <>
    <Navigation />
    <div className='flex flex-col items-center justify-center min-h-screen'>

      <div className='flex flex-col items-center sm:grid sm:grid-cols-2 sm:grid-rows-[200px_auto_200px] sm:gap-5 mt-[100px] sm:mt-[60px] pb-5'>

        {/*-----------------------------Welcome section----------------------------- */}

        <div className='flex flex-col items-center sm:col-span-3' data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1000' >

          <h2 className='font-semibold dark:text-white lg:text-lg' >Welcome to <span className='text-accent-color'>HoopTrack!</span></h2>

          <p className='max-w-[250px] sm:max-w-[500px] md:max-w-[650px] sm:text-center text-xs sm:text-sm lg:text-base pt-3'>HoopTrack is your personal to-do list app designed to help you stay on top of your tasks and goals. Whether you're managing your daily chores, organizing work projects, or tracking long-term goals, HoopTrack keeps everything simple and clear.</p>

        </div>
        
        {/*-----------------------------Why section----------------------------- */}

        <div className='flex flex-col items-center mt-[50px] sm:mt-0 sm:mr-[30px] lg:mr-[100px] dark:bg-slate-700 rounded-md bg-background' data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1200'>

          <h2 className='font-semibold dark:text-white lg:text-lg pt-3'>Why <span className='text-accent-color font-semibold'>HoopTrack?</span></h2>

          <ul className='max-w-[250px] lg:max-w-[350px] flex flex-col gap-3 lg:gap-5 p-5'>
            
            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'><span className='font-semibold text-accent-color'>Stay Organized.</span> Easily create, update, and manage your tasks.</p>
            </li>

            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'><span className='font-semibold text-accent-color'>Focus on What Matters.</span> Prioritize your to-dos and track progress in one place.</p>
            </li>

            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'><span className='font-semibold text-accent-color'>Easy to Use.</span> HoopTrack is designed with simplicity in mind—no clutter, no distractions.</p>
            </li>

          </ul>

        </div>

        {/*-----------------------------Key Features section----------------------------- */}

        <div className='flex flex-col items-center mt-[50px] sm:mt-0 sm:ml-[30px] lg:ml-[100px] dark:bg-slate-700 rounded-md bg-background' data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1400'>

          <h2 className='text-accent-color font-semibold lg:text-lg pt-3'>Key Features</h2>

          <ul className='max-w-[250px] lg:max-w-[350px] flex flex-col gap-3 lg:gap-5 p-5'>
            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'>Add, edit, and delete tasks with ease.</p>
            </li>

            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'>Mark tasks as done to track your accomplishments.</p>
            </li>

            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'>Switch between light and dark mode for a comfortable experience.</p>
            </li>

            <li className='list-disc list-inside text-xs sm:text-sm lg:text-base'>
              <p className='inline'>Mobile-friendly design, so you can stay productive anywhere.</p>
            </li>

          </ul>

        </div>

        {/*-----------------------------Mission section----------------------------- */}

        <div className='flex flex-col items-center pt-[50px] sm:pt-0 sm:col-span-2' data-aos='fade-down' data-aos-duration='1700'>

          <h2 className='text-accent-color font-semibold lg:text-lg'>Our Mission</h2>
          <p className='max-w-[250px] sm:max-w-[500px] md:max-w-[600px] text-center text-xs sm:text-sm lg:text-base pt-3'>At HoopTrack, our goal is to make productivity simple and fun. We believe staying organized shouldn’t feel like work—it should be effortless and rewarding.</p>

        </div>

      </div>

    </div>
    </>

  )
};

export default AboutUs;
