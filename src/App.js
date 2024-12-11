import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import HomePage1 from './components/HomePage1';
import PersonalTest from './components/PersonalTest';
import ThankYou from './components/ThankYou';
import AboutUs from './components/AboutUse';
import CareerTest from './components/CareerTest';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import AdminDashboard from './components/AdminDashboard'
import WhichLogin from './components/WhichLogin';
import Resume from './components/Resume';
import Review from './components/Review';
import Careers from './components/Careers';
import Degrees from './components/Degrees';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/homepage2" element={<HomePage1 />} />
                <Route path="/personaltest" element={<PersonalTest />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/thankyou" element={<ThankYou />} /> 
                <Route path="/career-test" element={<CareerTest/>} />
                <Route path="/adminlogin" element={<AdminLogin/>} />
                <Route path="/adminregister" element={<AdminRegister/>} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/whichlogin" element={<WhichLogin />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/review" element={<Review />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/degrees" element={<Degrees />} />
            </Routes>
        </Router>
    );
};

export default App;
