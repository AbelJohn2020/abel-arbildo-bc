import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUpForm from './components/SignUpForm/SignUpForm';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />

          <Route path="/wallet" element={<DashBoard />} />
          <Route path="/send" element={<DashBoard />} />
          <Route path="/contacts" element={<DashBoard />} />
          <Route path="/receive" element={<DashBoard />} />
          <Route path="/shop" element={<DashBoard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
