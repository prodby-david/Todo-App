import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation';

const UserFeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  {/* const clearFeedbacks = () => {
    localStorage.removeItem('feedbacks');
    setFeedbacks([]); 
  };
  */}

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
      {feedbacks.length > 0 && <p className='mb-3'>Take a look at the users feedback</p>}

        {feedbacks.length === 0 ? (
          <p className='text-gray-500'>No feedback available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[100px]">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="w-full max-w-lg border p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-accent-color">{feedback.name}</h3>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${star <= feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-2">{feedback.comment}</p>
              </div>
            ))}
          </div>
          )}
      </div>

    {/*}  <button 
  onClick={clearFeedbacks} 
  className="mt-5 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
>
  Clear All Feedbacks
</button>
*/}

    
      
    </div>
  );
};

export default UserFeedbackDashboard;
