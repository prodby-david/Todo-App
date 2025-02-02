import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext  = createContext();

export const AuthProvider =  ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        setUser(savedUser ? JSON.parse(savedUser) : null);
    }, []);

    const Login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const Logout = () => {
        localStorage.removeItem('user'); 
        localStorage.removeItem('token');
        setUser(null);
    }

 
    return(
        <AuthContext.Provider value={{user, Login, Logout}}>
           { children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);