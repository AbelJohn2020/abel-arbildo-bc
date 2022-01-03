import React from 'react';
import Logo from "../images/logo-banexcoin.svg";
import SlideButton from '../SlideButton/SlideButton';
import "./BanexcoinNavbar.css";

const BanexcoinNavbar = ({ idiom, setIdiom }) => {
    return (
        <div className='navbar'>
           <img src={Logo} alt='Banexcoin logo' className='logo'/>
            <SlideButton idiom={idiom} setIdiom={setIdiom} />
        </div>
    )
}

export default BanexcoinNavbar;
