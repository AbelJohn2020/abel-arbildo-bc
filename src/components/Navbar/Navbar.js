import React, { useState } from 'react';
import Icons from '../Icons/Icons';
import './Navbar.css';

const Navbar = () => {
    const [logOut, setLogOut] = useState(false)
    return (
        <div className="d-flex align-items-center navbar-styles">
            <div className="d-flex flex-column">
                <button className="btn text-capitalize lh-base align-middle text-white" onClick={() => setLogOut(!logOut)}>
                    <Icons type="ellipsis" size="24px" color="#FFFFFF" />
                </button>
                {
                    logOut &&   <button className="btn text-capitalize lh-base align-middle text-white">
                                    log out
                                </button>
                }
            </div>
            
            <div className="navbarTitle">
                <Icons type="coin" size="32px" color="#FFFFFF" />
                <h1 className="d-flex align-items-center text-white text-capitalize">
                    banex <div className="text-dark text-lowercase">coin</div>
                </h1>
            </div>
            <button className="btn text-capitalize lh-base align-middle text-white">
                <Icons type="dashBoard" size="24px" color="#FFFFFF" />
            </button>
        </div>
    )
}

export default Navbar;
