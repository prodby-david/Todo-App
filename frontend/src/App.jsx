import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dashboard from './pages/dashboard';
import AboutUs from './pages/about';
import Help from './pages/help';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/protectedRoute';
import ProtectedDashboard from './pages/protectedDashboard';
import UserFeedbackDashboard from './pages/userFeedbackDashboard';
import UserFeedbackForm from './pages/userFeedbackForm';



function App() {

  useEffect(() => {
    AOS.init(); 
  }, []);


    return(

      <AuthProvider>
        <Router>
              <Routes>
                <Route path='/' element={<Dashboard /> } />
                <Route path='/about' element={ <AboutUs /> } />
                <Route path='/feedback-dashboard' element={ < UserFeedbackDashboard /> } />
                <Route path='/help' element={ <Help />} />
                <Route path='/signup' element={ <SignUp /> }/>
                <Route path='/signin' element={ <SignIn /> } />
                <Route path='/user-feedback-form' element={<UserFeedbackForm />} />
                <Route path='/dashboard'
                  element={
                  <ProtectedRoute>
                    <ProtectedDashboard /> 
                  </ProtectedRoute>}/>
              </Routes>
        </Router>
      </AuthProvider>
    )
}

export default App;
