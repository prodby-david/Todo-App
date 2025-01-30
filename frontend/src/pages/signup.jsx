import React, { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../components/darkmodetoggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {

  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAndCondition: false
  });

const [error, setError] = useState(); 
const [firstnameError, setFirstnameError] = useState('');
const [lastnameError, setLastnameError] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|edu|ph)$/;
const namesValidation = /^[a-zA-Z\s]+$/

const navigate = useNavigate();

const handleChange = (e) => {
  
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFirstnameError('');
    setLastnameError('');
    setEmailError('');
    setPasswordError('');
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setFirstnameError('');
    setLastnameError('');
    setEmailError('');
    setPasswordError('');

    if(!namesValidation.test(formData.lastname) ){
      setLastnameError('Names should be letters and spaces only.');
      return;
    }

    if(!namesValidation.test(formData.firstname)){
      setFirstnameError('Names should be letters and spaces only.');
      return;
    }

    if(!emailValidation.test(formData.email)){
        setEmailError('Email not recognized. Please enter a valid email address.');
        return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    if(formData.password.length < 8){
      setPasswordError('Password must be at least 8 characters long.');
    }

    try{
      
      const register = await axios.post('http://localhost:3500/api/signup', formData);
      console.log('User registered.', register.data);

      const data = register.data;

      if(register.status === 200) {

        Swal.fire({
          title: 'Registered successfully.',
          text: 'Click the OK button to proceed.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((buttonClicked) => {
              if(buttonClicked.isConfirmed){
                navigate('/signin');
              }
        });
        
        setFormData({
          lastname: '',
          firstname: '',
          email: '',
          password: '',
          confirmPassword: '',
          termsAndCondition: false
        })

      }else {
        setError(data.message || "Something went wrong!");
      }
    }
    catch(err){
      console.error('Sign up error');
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  }

  return (
    <>

    <div className='flex justify-between mt-5 absolute top-0 left-0 w-full text-sm'>
      <a href="/" className='ml-4 sm:ml-10 text-accent-color hover:underline dark:hover:text-accent-color dark:text-white'><FontAwesomeIcon icon={faChevronLeft} className='mr-1' />Back to dashboard</a>
      <div className='mr-8 sm:mr-20'>
        <DarkModeToggle/>
      </div>
    </div>
    

   <div className='flex flex-col items-center justify-center min-h-screen mt-[80px] md:mt-0 px-5'> 
   
    
    <div className='pb-3 border rounded-md w-full max-w-md 2xl:max-w-2xl px-5 mx-auto dark:border-darkmode-bg'>

      <div className='flex flex-col items-center'>
        <h2 className='text-lg font-semibold mt-4 text-accent-color dark:text-accent-color'>Sign Up</h2>
        <p className='text-sm md:text-md pt-3'>Already have an account? <a href="/signin" className='text-accent-color hover:underline'>Sign in here</a></p>
      </div>

      <div className='mt-3'>
        <button type='submit' className='flex items-center justify-center gap-2 w-full shadow-sm p-3 rounded-md hover:bg-slate-50 dark:border-darkmode-content-color dark:hover:bg-darkmode-bg border'>
          <img src="assets/google-icon.png" alt="button logo" width={20} />
          <p className='dark:text-white text-sm xl:text-md'>Sign Up with Google</p>
        </button>
      </div>

      <div className='flex items-center justify-center mt-4'>
        <div className='h-px w-full border dark:border-darkmode-content-color'></div>
        <div className='px-5 text-xs text-font-color2 dark:text-darkmode-content-color'>OR</div>
        <div className='h-px w-full border dark:border-darkmode-content-color'></div>
      </div>

        {/*-----------Form------------*/}
      
      <form onSubmit={handleSubmit}>

        <div className='flex flex-col sm:flex-row justify-between gap-x-3 mt-1'>
          
        <div className='flex flex-col w-full py-2'>
          <label htmlFor="lastname" className='font-semibold dark:text-white text-sm xl:text-md'>Last Name</label>
          <input type="text"
          name='lastname'
          id='lastname'
          value={formData.lastname}
          onChange={handleChange}
          required
          className={`w-full max-w-xl text-xs md:text-sm xl:text-sm mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color ${lastnameError && !namesValidation.test(formData.lastname) ? 'border-red-500'  : ''}`
        } 
          />
          {lastnameError && <p className='text-red-500 text-sm mt-1'>{lastnameError}</p>}
        </div>
        
        <div className='flex flex-col w-full py-2'>
          <label htmlFor="firstname" className='font-semibold dark:text-white text-sm md:text-md xl:text-md'>First Name</label>
          <input type="text"
          name='firstname'
          id='firstname'
          value={formData.firstname}
          onChange={handleChange}
          required
          className={`w-full max-w-xl text-xs md:text-sm xl:text-sm mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color ${firstnameError && !namesValidation.test(formData.firstname) ? 'border-red-500'  : ''}`
        } />
          {firstnameError && <p className='text-red-500 text-sm mt-1'>{firstnameError}</p>}
        </div>

        </div>

          <div className='mt-2'>
            <label htmlFor="email" className='font-semibold dark:text-white text-sm md:text-md xl:text-md'>Email</label>
            <input type="email"
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='example@gmail.com'
            required
            className={`w-full max-w-lg text-xs md:text-sm xl:text-md mt-2 p-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color 2xl:max-w-2xl ${emailError && !emailValidation.test(formData.email) ? 'border-red-500'  : ''}`} />
              {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
            </div>

        <div className='mt-2'>
          <label htmlFor="password" className='font-semibold dark:text-white text-sm md:text-md xl:text-md'>Password</label>
          <input type="password"
          name='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          required
          className={`w-full max-w-lg text-xs md:text-sm xl:text-md mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color 2xl:max-w-2xl ${passwordError ? 'border-red-500'  : ''} `} />
          {passwordError && <p className='text-red-500 text-sm mt-1'>{passwordError}</p>}
        </div>

        <div className='mt-2'>
          <label htmlFor="confirmPassword" className='font-semibold dark:text-white text-sm md:text-md xl:text-md'> Confirm Password</label>
          <input type="password"
          name='confirmPassword'
          id='confirmpassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={`w-full max-w-lg text-xs md:text-sm xl:text-md mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color 2xl:max-w-2xl ${passwordError ? 'border-red-500'  : ''} `} />
        </div>

        <div className='flex items-center mt-2'>
          <input type="checkbox"
          name='termsAndCondition'
          id='checkbox'
          required
          checked={formData.termsAndCondition}
          onChange={(e) =>
            setFormData({ ...formData, termsAndCondition: e.target.checked })
          }
          className='mr-2 cursor-pointer'
          />
          <label htmlFor="checkbox" className='text-xs sm:text-sm md:text-md dark:text-white'>I accept the <a href="/" className='text-accent-color hover:underline'>Terms and Conditions</a></label>
        </div>

          <div className='mt-3'>
            <button type='submit' className='bg-accent-color w-full p-3 rounded-md text-xs sm:text-sm md:text-md text-white opacity-80 hover:opacity-100'>Sign Up</button>
          </div>

      </form>

    
      </div>

   </div>
   </>

  )
};

export default SignUp;
