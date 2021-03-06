import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUpForm from './components/SignUpForm/SignUpForm';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import BanexcoinNavbar from './components/BanexcoinNavbar/BanexcoinNavbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [idiom, setIdiom] = useState(false);
  const [account, setAccount] = useState("");
  console.log(account, "account")

  useEffect(() => {
    setAccount(JSON.parse(window.localStorage.getItem("")));
    setIdiom(JSON.parse(window.localStorage.getItem("false")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("", JSON.stringify(account));
  }, [account]);

  useEffect(() => {
        window.localStorage.setItem("false", JSON.stringify(idiom));
  }, [idiom]);

  return (
    <div className="App">
      <Router>
        <BanexcoinNavbar idiom={idiom} setIdiom={setIdiom}/>
        <Routes>
          <Route path="/" element={<Login idiom={idiom} />} />
          <Route path="/signup" element={<SignUp idiom={idiom} setAccount={setAccount} />} />
          {
            account === "natural" 
                ? <Route path="/signup/natural" element={<SignUpForm account={account} idiom={idiom} />} />
                : <Route path="/signup/corporate" element={<SignUpForm account={account} idiom={idiom} />} />
          }

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
