import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import TodoNav from '../components/todonav';
import { useAuthContext } from '../context/authContext';
import axios from 'axios';

const Account = () => {
  const { user, Login } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const fieldToUpdate = modalType === 'email' ? 'email' : 'password';

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue('');
  };

 
  const handleSubmit = async () => {

    if (!user || !user.id) {
      console.error("Error: user or userId is undefined!");
      Swal.fire({
        title: "Error",
        text: "User ID is missing. Please log in again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return null; 
    }

    if (modalType === 'email') {
      const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|edu|ph)$/;
      if (!emailValidation.test(inputValue)) {
        Swal.fire({
          title: 'Invalid Email',
          text: 'Please enter a valid email address.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }
    } else if (modalType === 'password') {

      if (inputValue.length < 6) {
        Swal.fire({
          title: 'Invalid Password',
          text: 'Password must be at least 6 characters long.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }
    }

    try {
      const update = await axios.put('http://localhost:3500/api/account', {
        userId: user.id,
        field: fieldToUpdate,
        value: inputValue,
      }, { withCredentials: true });

      if (update.data.ok && update.data.updatedUser) {

        const updatedUser = update.data.updatedUser;
        localStorage.setItem('user', JSON.stringify(updatedUser));
        Login(updatedUser);

        Swal.fire({
          title: `${modalType === 'email' ? 'Email' : 'Password'} Updated`,
          text: `Your ${modalType} has been successfully updated.`,
          icon: 'success',
          confirmButtonText: 'OK',
        });

        closeModal();
      } else {
        throw new Error('Update failed');
      }
    } catch (err) {
      console.error('Update error:', err);
      Swal.fire({
        title: 'Update Failed',
        text: 'An unexpected error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <TodoNav />
      <div className="flex flex-col items-center justify-center min-h-screen px-3">
        <div className="flex flex-col justify-center border border-color-accent-color p-8 rounded-lg w-full max-w-xl h-auto shadow-lg">
          <h1 className="font-semibold text-accent-color text-[32px] text-center">Profile</h1>

          <div className="flex flex-col mt-8 px-5">
            <p className="text-accent-color font-semibold text-sm">Name</p>
            <span className="py-3 pl-3 mt-2 bg-gray-100 rounded-md">{user.firstname} {user.lastname}</span>
          </div>

          <div className="flex flex-col mt-8 px-5">
            <p className="text-accent-color font-semibold">Email</p>
            <span className="py-3 pl-3 my-2 bg-gray-100 rounded-md text-sm">{user.email}</span>
            <button 
              onClick={() => openModal('email')} 
              className="p-3 my-2 bg-accent-color w-[200px] text-center text-white rounded-md opacity-75 hover:opacity-100"
            >
              Change Email Address
            </button>
          </div>

          <div className="flex flex-col mt-8 px-5">
            <p className="text-accent-color font-semibold">Password</p>
            <p className="my-1 text-sm">Last change 30 minutes ago.</p>
            <button 
              onClick={() => openModal('password')} 
              className="p-3 my-2 bg-accent-color w-[200px] text-center text-white rounded-md opacity-75 hover:opacity-100"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-accent-color">
              {modalType === 'email' ? 'Change Email Address' : 'Change Password'}
            </h2>
            <input
              type={modalType === 'email' ? 'email' : 'password'}
              placeholder={modalType === 'email' ? 'Enter new email' : 'Enter new password'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 border border-gray-200 outline-none focus:border-accent-color rounded-md mb-4 text-sm"
            />
            <div className="flex justify-end">
              <button 
                onClick={closeModal} 
                className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-md"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;