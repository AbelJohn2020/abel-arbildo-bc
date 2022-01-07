import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo-banexcoin.svg";
import SlideButton from '../SlideButton/SlideButton';
import "./BanexcoinNavbar.css";

const BanexcoinNavbar = ({ idiom, setIdiom }) => {
    return (
        <div className='navbar'>
            <Link to="/" className="logo">
                <img src={Logo} alt='Banexcoin logo' className='logo-navbar'/>
            </Link>
            <SlideButton idiom={idiom} setIdiom={setIdiom} />
        </div>
    )
}

export default BanexcoinNavbar;
