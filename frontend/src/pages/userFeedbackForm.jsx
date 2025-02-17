import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TodoNav from '../components/todonav';


const UserFeedbackForm = () => {

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const FeedbackClicked = (e) => {

    e.preventDefault();

    if (!name || !comment) {
      Swal.fire({
        title: 'Submission failed',
        text: 'All fields are required.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return; 
    }

    const feedbackList = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbackList.push({ name, comment });
    localStorage.setItem('feedbacks', JSON.stringify(feedbackList));

    Swal.fire({
      title: 'Feedback submitted.',
      text: 'Press the button to continue.',
      icon: 'success',
      confirmButtonText: 'Return to dashboard'
    }).then((result) => {
      if(result.isConfirmed){
        navigate('/dashboard');
      }
    })

  };

  return (

    <>
    <TodoNav />

    <div className='flex flex-col items-center justify-center min-h-screen px-5'>

      <div data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1000'>
        <h2 className='font-semibold text-md md:text-base lg:text-xl text-accent-color'>Got feedback? Were all ears!</h2>
      </div>

      <div className='mt-5 pb-2 border rounded-md w-full max-w-lg 2xl:max-w-2xl px-2 mx-auto dark:border-darkmode-bg' data-aos='fade-down' data-aos-duration='1700' data-aos-delay='1400'>
        
          <form className="flex flex-col p-6 rounded-lg">

            <div className='flex flex-col'>
              <label htmlFor="name" className='font-semibold text-sm text-accent-color '>Name</label>
              <input 
              type="text" 
              name="name" 
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='text-sm mt-2 py-2 pl-2 outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color'
              />
            </div>

            <div className='flex flex-col mt-5'>
              <label htmlFor="comment" className='font-semibold text-sm text-accent-color'>Comments</label>
              <textarea 
              name="comment" 
              id="comment"
              onChange={(e) => setComment(e.target.value)}
              placeholder='Enter your comments here...'
              className='mt-2 py-2 pl-2 text-sm h-40 max-h-[320px] resize-none outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color'
              >
              </textarea>

            </div>

          </form>

          <div className='mt-5 flex justify-center'>
            <button onClick={FeedbackClicked} className='p-3 bg-accent-color w-full text-white rounded-lg opacity-85 hover:opacity-100'>Submit</button>
          </div>

      </div>

    </div>
    </>
  )
};

export default UserFeedbackForm;
