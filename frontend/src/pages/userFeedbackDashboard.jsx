import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const UserFeedbackDashboard = () => {

  const [feedbacks, setFeedbacks] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {

    const fetchFeedbacks = async () => {

      try {
        const response = await axios.get('http://localhost:3500/api/feedback-dashboard', { withCredentials: true }); 
        setFeedbacks(response.data);
      } 
      catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    const fetchUser = async () => {
      try {
        const userResponse = await axios.get('http://localhost:3500/api/feedback-dashboard', { withCredentials: true });
        setUserId(userResponse.data._id); 
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchFeedbacks();
    fetchUser();
  }, []);

  return (
    <div className="p-5">
      <div>
        <Navigation />
      </div>

      <div className='flex flex-col items-center mt-[100px] px-5'>

      <h2 className="text-2xl font-bold my-2 text-accent-color">Feedbacks and Reviews</h2>
      {feedbacks.length > 0 && <p className='mb-3'>Take a look at the users feedback</p>}

        {feedbacks.length === 0 ? (
          <p className='text-gray-500'>No feedback available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[100px]">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="w-full max-w-lg border p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-accent-color">
                  {feedback.userId?.firstname} {feedback.userId?.lastname}
                </h3>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-xl ${star <= feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  ))}
                </div>
                <p className="mt-2 break-words overflow-hidden text-ellipsis">{feedback.comment}</p>
                {feedback.userId?._id === userId &&(
                  <button
                    className="text-accent-color mt-2"
                    onClick={() => deleteFeedback(feedback._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
          )}
      </div>
    
    </div>
  );
};

export default UserFeedbackDashboard;
