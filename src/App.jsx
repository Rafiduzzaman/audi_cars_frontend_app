import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddVehicleForm from './Components/Forms/addVehicleForm';
import LoginForm from './Components/Forms/loginForm';
import SignupForm from './Components/Forms/signupForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className='space-y-3 my-3'>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/add-vehicle" element={<AddVehicleForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<div>Welcome to the Home Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
