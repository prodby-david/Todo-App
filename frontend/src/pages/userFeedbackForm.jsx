import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TodoNav from '../components/todonav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const UserFeedbackForm = () => {

  const [user, setUser] = useState({ firstname: '', lastname: ''});
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  const FeedbackClicked = async (e) => {

    e.preventDefault();

    try{

      const response = await axios.post('http://localhost:3500/api/user-feedback-form', {rating, comment}, {withCredentials: true});  

      console.log('Feedback submitted:', response.data);

    }catch(error){
      console.error(error);
    }

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
        
          <form className="flex flex-col p-6 rounded-lg" onSubmit={FeedbackClicked}>

            <div className="flex flex-col mt-5">
              <label className="font-semibold text-sm text-accent-color">Rate Us</label>
              <div className="flex gap-x-5 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-xl ${
                      (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <FontAwesomeIcon icon={faStar}/>
                  </span>
                ))}
              </div>
            </div>


            <div className='flex flex-col mt-5'>
              <label htmlFor="comment" className='font-semibold text-sm text-accent-color'>Comments</label>
              <textarea 
              name="comment" 
              id="comment"
              maxLength={100}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Enter your comments here...'
              className='mt-2 py-2 pl-2 text-sm h-40 max-h-[300px] resize-none outline-none border rounded-lg focus:border-accent-color dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color'
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





