import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import DarkModeToggle from '../components/darkmodetoggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

  const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [rememberCheckbox, setRememberCheckbox] = useState(false);

    useEffect(() => {
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
      
      if (savedEmail && savedPassword) {
        setFormData({ email: savedEmail, password: savedPassword });
        setRememberCheckbox(true); 
      }
    }, []);

    const handleCheckbox = (e) => {
      setRememberCheckbox(e.target.checked); 
    };

    const { Login: setUser } = useAuthContext();

    const [error, setError] = useState();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
      const {name, value } = e.target;

      setFormData({...formData, [name]: value})

      setEmailError('');
      setPasswordError('');
    }

    const handleSubmit = async (e) => {

      e.preventDefault();

      if (rememberCheckbox) {
        localStorage.setItem('email', formData.email);
        localStorage.setItem('password', formData.password); 
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      if (!formData.email || !formData.password) {
        setError('Both fields are required');
        return;
      }
      
        try{  
          
          const login = await axios.post('http://localhost:3500/api/signin', formData, {withCredentials: true});

          const usersData = login.data;

          setUser(usersData.data);

          if(login.status === 200){ 
            
            console.log('Login response:', login.data);
            setUser(login.data.user);

            Swal.fire({
              title: 'Login successfull!',
              text: 'Click the OK button to continue.',
              icon: 'success',
              confirmButtonText: 'OK',
            }).then((buttonClicked) => {
                  if(buttonClicked.isConfirmed){
                    navigate('/dashboard');
                  }
            }); 

            setFormData({
              email: '',
              password: ''
            })
          }
        }catch(err){

          console.log('Error object:', err);

          if(err?.response?.data?.message){

            const message = err?.response?.data?.message;

            if(message.includes("Email doesn't exist.")){
              setEmailError("Email doesn't exist.")
            }else if(message.includes('Incorrect password.')){
                setPasswordError('Incorrect password. Please try again.')
            }else{
              setError('An unexpected error occured.')
            }
          }
          else{
            setError('An unexpected error occured.');
          }
        }  
    }


    return (
      <>

        {/*--------Navigation----------*/}

        <div className='flex justify-between mt-5 absolute top-0 left-0 w-full text-sm'>
          <a href="/" className='ml-4 sm:ml-10 text-accent-color hover:underline dark:text-white'><FontAwesomeIcon icon={faChevronLeft} className='mr-1' />Back to dashboard</a>
          <div className='mr-8 sm:mr-20'>
            <DarkModeToggle/>
          </div>
        </div>

        {/*-----------Main Content------------- */}

        <div className='flex flex-col items-center justify-center min-h-screen mt-[40px] sm:mt-5 px-5'>

          <div className='pb-3 border rounded-md w-full max-w-md 2xl:max-w-2xl px-5 mx-auto dark:border-darkmode-bg'>

            <div className='flex flex-col items-center'>
              <h2 className='text-lg font-semibold mt-4 text-accent-color dark:text-accent-color'>Sign In</h2>
              <p className='text-sm md:text-md pt-3'>Don't have an account yet? <a href="/signup" className='text-accent-color hover:underline'>Sign up here</a></p>
            </div>

            <div className='mt-3'>
              <button type='submit' className='flex items-center justify-center gap-2 w-full shadow-sm p-3 rounded-md hover:bg-slate-50 dark:border-darkmode-content-color dark:hover:bg-darkmode-bg border'>
                <img src="assets/google-icon.png" alt="button logo" width={20} />
                <p className='dark:text-white text-sm xl:text-md'>Continue with Google</p>
              </button>
            </div>

            <div className='flex items-center justify-center mt-4'>
              <div className='h-px w-full border dark:border-darkmode-content-color'></div>
              <div className='px-5 text-xs text-font-color2 dark:text-darkmode-content-color'>OR</div>
              <div className='h-px w-full border dark:border-darkmode-content-color'></div>
            </div>

            {/*---------Form---------- */}

            <form onSubmit={handleSubmit}> 

              <div className='mt-5'>

                <label htmlFor="email" className='font-semibold dark:text-white text-sm xl:text-md'>Email</label>
                  {emailError && <p className='text-red-500 text-sm mt-2'>{emailError}</p>}
                  <input type="text"
                  name='email'
                  id='email'
                  value={formData.email || ''}
                  onChange={handleChange}
                  className={`w-full max-w-lg text-xs md:text-sm xl:text-md mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color 2xl:max-w-2xl ${emailError ? 'border-red-500' : ''}`} />
              </div>

              <div className='mt-5'>
                  <div className='flex justify-between'>
                    <label htmlFor="password" className='font-semibold dark:text-white text-sm md:text-md xl:text-md'>Password</label>
                    <a href="/" className='text-sm text-accent-color hover:underline'>Forgot password?</a>
                  </div>
                  {passwordError && <p className='text-red-500 text-sm mt-2'>{passwordError}</p>}
                  <input type="password"
                  name='password'
                  id='password'
                  value={formData.password || ''}
                  onChange={handleChange}
                  className={`w-full max-w-lg text-xs md:text-sm xl:text-md mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color 2xl:max-w-2xl ${passwordError ? 'border-red-500' : ''}`} />
              </div>

              <div className='mt-5 flex items-center'>
                <input type="checkbox"
                name='remCheckbox'
                id='remCheckbox'
                checked={rememberCheckbox}
                onChange={handleCheckbox}
                className='mr-2 cursor-pointer' />
                <label htmlFor="remCheckbox" className='text-sm'>Remember me</label>
              </div>

            
              <div className='mt-5'>
                {error && <p className='text-red-500 text-sm text-center my-2'>{error}</p>}
                <button className='bg-accent-color w-full p-3 rounded-md text-xs sm:text-sm md:text-md text-white opacity-80 hover:opacity-100' >Sign In</button>
              </div>

            </form>

          </div>

        </div>

        
      </>
    )
  };

  export default SignIn;
