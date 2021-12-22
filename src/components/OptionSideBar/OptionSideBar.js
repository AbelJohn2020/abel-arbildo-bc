import React from 'react'
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
import "./OptionSideBar.css"

const OptionSideBar = ({icon, name, isActive, activeOption, onClick}) => {
    return (
        <div>
            <div 
                onClick={onClick} 
                id={isActive}   
            >
                <Link 
                    to={name} 
                    className={isActive === activeOption ? "fw-bolder text-capitalize lh-base align-middle selected" : "fw-bolder text-capitalize lh-base align-middle option-sidebar"} 
                >
                    <Icons type={icon} size="24px" />
                    <p>{isActive}</p>
                </Link>
            </div>

            <div 
                onClick={onClick} 
                id={isActive}
            >
                <Link 
                    to={name} 
                    className={isActive === activeOption ? "fw-bolder text-capitalize lh-base align-middle selected-responsive" : "fw-bolder text-capitalize lh-base align-middle option-sidebar-responsive"} 
                >
                    <Icons type={icon} size="24px" color="#FFFFFF" />
                    <p>{name}</p>
                </Link>
            </div>
        </div>
    )
}

export default OptionSideBar;
