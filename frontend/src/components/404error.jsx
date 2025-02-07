import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';


const ErrorNotFound = () => {

  return (

    <div className='flex flex-col items-center justify-center h-screen'>
        <FontAwesomeIcon icon={faSkullCrossbones} className='text-[70px] sm:text-[80px] md:text-[90px] lg:text-[120px] mb-5' />
      <h1 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className=" text-sm sm:text-md md:text-base lg:text-lg mt-2 w-full max-w-md px-2 text-center">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/dashboard" className=" text-sm mt-4 p-3 md:p-4 lg:p-5 bg-gray-900 opacity-75 hover:opacity-100 text-white rounded-md ">
        Back to dashboard
      </Link>
    </div>

  )
}

export default ErrorNotFound;
