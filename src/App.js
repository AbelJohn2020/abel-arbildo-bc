import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUpForm from './components/SignUpForm/SignUpForm';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import BanexcoinNavbar from './components/BanexcoinNavbar/BanexcoinNavbar';

function App() {
  const [idiom, setIdiom] = useState(false)
  return (
    <div className="App">
      <Router>
        <BanexcoinNavbar idiom={idiom} setIdiom={setIdiom}/>
        <Routes>
          <Route path="/" element={<Login idiom={idiom} />} />
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
