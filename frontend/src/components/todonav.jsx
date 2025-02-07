import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faComment, faHouse, faRightFromBracket, faArrowRightLong, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../components/darkmodetoggle.jsx';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/authContext.jsx';
import Swal from 'sweetalert2';

const TodoNav = () => {

  const [isOpen, setOpen] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();
 
  const navController = () => {
    setOpen(false);
  }

  const handleLogout = () => {

    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'info',
      confirmButtonText: 'Yes',
      showDenyButton: true,
      denyButtonText: 'No',
    }).then((result) => {
      if(result.isConfirmed){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
      }
    });
  }



  return (

    <div>

    <div className={`fixed flex flex-col gap-3 h-full w-[300px] bg-darkmode-bg ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 z-50 dark:shadow-lg`}>

      <div className='absolute top-5 right-8 text-white text-lg'>
        <DarkModeToggle />
      </div>

        <div className='flex flex-col items-center mt-[70px]'>
          <FontAwesomeIcon icon={faCircleUser} className='text-white text-[70px]' />
          <h2 className='text-white text-lg font-semibold mt-6'> {user.firstname} {user.lastname}</h2>
          <p className='text-accent-color text-xs'>{user.email}</p>
        </div>
      
          <ul className='flex flex-col items-center my-auto w-full'>

            <li className='flex flex-col items-center hover:bg-accent-color p-5 w-full border-b border-t' onClick={navController}>
              <Link to={'/dashboard'} className='text-white font-semibold'><FontAwesomeIcon icon={faHouse} className='mr-2'/>Dashboard</Link>
            </li>

            <li className='flex flex-col items-center hover:bg-accent-color p-5 w-full border-b' onClick={navController}>
            <Link to={'/user-feedback-form'} className='text-white font-semibold'>
            <FontAwesomeIcon icon={ faComment}  className='mr-2'/>Feedback</Link>
            </li>

            <li className='flex flex-col items-center hover:bg-accent-color p-5 w-full border-b' onClick={navController}>
            <Link to={'/account'} className='text-white font-semibold'><FontAwesomeIcon icon={faUser} className='mr-2'/>Account</Link>
            </li>

            <li className='flex flex-col items-center hover:bg-accent-color p-5 w-full border-b' onClick={handleLogout}>
            <p className='text-white font-semibold hover:cursor-pointer'>
              <FontAwesomeIcon icon={faRightFromBracket} className='mr-2 '/>Sign out
            </p>
            </li>

          </ul>
    </div>

    <div>
      <button onClick={() => setOpen(!isOpen)}
      className="fixed top-4 left-4 bg-white text-font-color1 rounded-xl px-4 py-2 shadow-md opacity-75 hover:opacity-100 z-50">
        <FontAwesomeIcon icon={isOpen ? faTimes : faArrowRightLong } className={`transform transition-all duration-300 ease-in-out text-accent-color ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
    </div>

    </div>
    
  )
}

export default TodoNav;
