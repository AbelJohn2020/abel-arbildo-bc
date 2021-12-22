import React from 'react'
import CardDashBoard from '../CardDashBoard/CardDashBoard';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';
import "./DashBoard.css";

const DashBoard = () => {
    return (
        <div className="dashboard-styles">
            <Navbar />
            <div className="d-flex">
                <SideBar />
                <div className='container'>
                    <h1>dashboard</h1>

                    <CardDashBoard 
                        title="coin" 
                        number="48.3356" 
                        firstData="ghash.io" 
                        secondData="advertising" 
                        thirdData="marcus" 
                        percent="+10%" 
                        bc="6.855" />
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
