import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { BsCoin } from "react-icons/bs"

const Login = () => {
    return (
        // <div className="container-sm border p-2 border-white border-2 bg-warning bg-opacity-75 rounded-3">
        <div className="container-login">
            <div className="login">
                <div className="login__title">
                    <p className="text-capitalize fw-bolder lh-base fs-1 login__title--name">my wallet</p>
                    <BsCoin size="32px" color="#FFFFFF"/>
                </div>
                <form className="form">
                    <div className="login__form">
                        <div className="mb-3">
                            <label 
                                htmlFor="user" 
                                className="form-label text-capitalize fw-bolder text-white fs-5 res"
                            >username</label>
                            <input 
                                type="text" 
                                className="form-control border-white border-2" 
                                id="user"
                                placeholder="Username"
                            />
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="password" 
                                className="form-label text-white fw-bolder text-capitalize fs-5 res"
                            >password</label>
                            <input 
                                type="password" 
                                className="form-control border-white border-2" 
                                id="password" 
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center buttons">    
                        <button 
                            type="submit" 
                            className="btn btn-warning fw-bolder text-capitalize lh-base align-middle border-2 border-light text-white"
                        >login</button>
                        <Link 
                            to="/signup" 
                            className="btn btn-warning fw-bolder text-capitalize lh-base align-middle border-2 border-light text-white signup"
                        >sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
