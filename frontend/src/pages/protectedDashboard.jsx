import React, { useEffect, useState } from 'react';
import Time from '../components/time.jsx';
import TodoNav from '../components/todonav.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import axios from 'axios';



const ProtectedDashboard = () => {

  const [todo, setTodo] = useState([]);
  const [ task, setTask ] = useState('');

  useEffect(() => {

    const fetchTodo = async () => {

      try {

        const response =  await axios.get('http://localhost:3500/api/dashboard', {withCredentials: true});
        setTodo(response.data.todos);

      }catch(err){
        console.log('Unexpected error.')
      }
    }
    fetchTodo();
  }, []);

  
  const addTask = async () => {

    if(task){
      Swal.fire({
        title: 'Task added to your todo',
        text: 'Click OK button to continue.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      const newTask = {
        text: task,
      };

      try{

        const response = await axios.post('http://localhost:3500/api/dashboard', newTask, {withCredentials: true});
        setTodo([response.data.saveTodo, ...todo]);

      }catch(err){
        console.log("Error adding task", err);
      }

      setTask('');
    }
    
    else{
      Swal.fire({
        icon: 'error',
        title: 'Field must not be empty',
        text: 'Please try again.',
        confirmButtonText: 'Try again',
      })
    }
  }


  const showTaskInfo = (task) => {

    if (!task) {
      console.error("Task is undefined");
      return;
    }

   
    Swal.fire({
      title: 'Task Information',
      html: `<strong>Task:</strong> ${task.text}<br><strong>Created At:</strong> ${task.createdAt}`,
      icon: 'info',
      confirmButtonText: 'OK',
    });
  };

  const removeTask = (index) => {

    Swal.fire({
      title: "Are you sure you want to delete that task?",
      showDenyButton: true,
      text: 'This action is irreversible.',
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        confirmButton: "confirm-btn"
      }
    }).then(async (result) => {

      if (result.isConfirmed) {

        try{
          
          const taskId = todo[index]._id;
          await axios.delete(`http://localhost:3500/api/dashboard/${taskId}`, {withCredentials: true});

          const updatedTodos = todo.filter((_, i) => i !== index);
          setTodo(updatedTodos);

          Swal.fire({
            title: 'Task deleted successfully',
            text: 'Click OK button to continue.',
            icon: 'success',
            confirmButtonText: 'OK',
          });

        }catch(err){

          Swal.fire('Failed to delete task.', '', 'error');
          console.error('Error deleting task:', err);

        }
      }
    })
  }



  return (

    <div>

      <div>
       <TodoNav />
      </div>

      <div className='flex flex-col justify-center'>

        <div className='flex flex-col items-center mt-[100px]'>

          <div className=' text-[20px] leading-[24px] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[54px] text-center font-semibold'>

            <h2 className='dark:text-white'>Stay Focused.</h2>
            <h2 className='text-accent-color'>Get things done.</h2>
            
          </div>

          <div className='flex flex-col items-center w-full px-5 '>

            <input type="text"
            className='w-full max-w-md border p-3 outline-none mt-5 rounded-md text-sm focus:border-accent-color shadow-sm dark:bg-darkmode-bg dark:border-darkmode-content-color dark:text-white dark:focus:border-accent-color'
            maxLength={50}
            value={task}
            name='taskField'
            onChange={(e) => setTask(e.target.value)}
            />

            <button className='py-2 px-2 rounded-md mt-5 border border-accent-color text-white bg-accent-color active:text-accent-color active:bg-transparent opacity-80 hover:opacity-100 sm:py-3 sm:px-3 shadow-md' onClick={addTask}>
            Add to your todo<FontAwesomeIcon icon={faPencil} className='ml-2'/>
            </button>
            
          </div>

        </div>

        <div className='mt-[100px] flex flex-col items-center px-5 my-10'>

          <h2 className='text-accent-color font-semibold mb-5 text-sm sm:text-md md:text-base'>Your Todo's</h2>
          
          {todo.length > 0 ? (

            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

              {todo.map((todo,index) => (
                
              <li key={index}
              className='flex flex-col gap-4 items-center border rounded-lg py-5 px-3 shadow-sm w-[200px] max-w-[400px] dark:border-accent-color dark:bg-darkmode-bg dark:text-white'>

              <span className=' break-all overflow-x-hidden h-[100px]'>{todo.text}</span>

                <div className='flex gap-5'>

                  <button onClick={() => removeTask(index)}>
                        <FontAwesomeIcon icon={faTrash} className='text-gray-400 hover:text-accent-color' title='Delete task'/>  
                    </button>

                    <button onClick={() => showTaskInfo(todo)} >
                        <FontAwesomeIcon icon={faInfo}  className='text-lg text-gray-400 hover:text-accent-color' title='Task info'/>
                    </button>  

                </div>
                  
            </li>
          ))}
            </ul>
          ): (<p className="text-gray-500 text-sm sm:text-md">No tasks added yet.</p>)}

        </div>    

      </div>

    </div>
  )
}

export default ProtectedDashboard;
  






