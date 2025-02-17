import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';

const UserFeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  return (
    <div className="p-5">
      <div>
        <Navigation />
      </div>

      <div className='flex flex-col items-center mt-[100px] px-5'>

      <h2 className="text-2xl font-bold my-2 text-accent-color">Feedbacks and Reviews</h2>
      <p className='mb-3'>Take a look at the users feedback</p>

        {feedbacks.length === 0 ? (
          <p className='text-gray-500'>No feedback available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[100px]">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="w-full max-w-lg border p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-accent-color">{feedback.name}</h3>
                <p className="text-sm text-gray-500">{feedback.email}</p>
                <p className="mt-2">{feedback.comment}</p>
              </div>
            ))}
          </div>
          )}
      </div>
    
      
    </div>
  );
};

export default UserFeedbackDashboard;
