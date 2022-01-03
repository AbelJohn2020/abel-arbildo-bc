import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Banexcoin from "../images/banexcoin.png";
import Icons from '../Icons/Icons';

const Login = ({ idiom }) => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });
    const [show, setShow] = useState(false);
    const [active, setActive] = useState('');

    const handleChangeUsername = (e) => {
        setLogin({ ...login, username: e.target.value });
    }

    const handleChangePassword = (e) => {
        setLogin({ ...login, password: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin({...login});
        setLogin({
            username: '',
            password: '',
        })
    }

    return (
        <div className="container-login">
            <div className='box-banexboin'>
                <img src={Banexcoin} alt="A client buying banexcoin" className="banexcoin" />
            </div>
            <div className="login">
                <div className='box-login-form'>
                    <div className="login__title">
                        <h1 className="login__title--name">
                            {idiom ? "We are" : "Somos"} <div>Banexcoin</div>
                        </h1>
                        <p className="text-capitalize login__subtitle--name">
                            {idiom ? "login" : "iniciar sesión"}
                        </p>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label 
                                htmlFor="user" 
                                className="form-label text-capitalize fw-bolder res"
                            >{idiom ? "username" : "usuario"}</label>
                            <div 
                                className={active === "user" ? "box-input active" : "box-input"} 
                                onClick={() => setActive("user")}
                            >
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="user"
                                    placeholder={idiom ? "Username" : "Usuario"}
                                    value={login.username}
                                    onChange={handleChangeUsername}
                                />
                                <div className="box-icon">
                                    <Icons type="user" color="#495057" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="password" 
                                className="form-label fw-bolder text-capitalize res"
                            >{idiom ? "password" : "contraseña"}</label>
                            <div 
                                className={active === "password" ? "box-input active" : "box-input"} 
                                onClick={() => setActive("password")}
                            >
                                <input 
                                    type={show ? "text" : "password"} 
                                    className="form-control" 
                                    id="password" 
                                    placeholder={idiom ? "Password" : "Contraseña"}
                                    value={login.password}
                                    onChange={handleChangePassword}
                                />
                                <div onClick={() => setShow(!show)} className="password box-icon">
                                    <Icons type={show ? "showPassword" : "password"} color="#495057" />
                                </div>
                            </div>
                        </div> 
                        <button 
                            type="submit" 
                            className="btn text-capitalize lh-base align-middle border-2 border-light text-white btn-login"
                        >{idiom ? "login" : "iniciar sesión"}</button>
                        <Link 
                            to="/problem-logging-in/" 
                            className="edit-password"
                        >{idiom ? "Did you forget your password?" : "¿Olvidaste tu contraseña?"}</Link>
                        <Link 
                            to="/signup" 
                            className="btn text-capitalize lh-base align-middle border-2 border-light text-white signup"
                        >{idiom ? "sign up" : "registrarse"}</Link>
                    </form>
                </div>
                <div className="login-footer">
                    <Link 
                        to="/support/solutions" 
                        className="footer-links"
                    >{idiom ? "Terms and Conditions" : "Terminos y Condiciones"}</Link>
                    <Link 
                        to="/support/tickets" 
                        className="footer-links contactus"
                    >{idiom ? "Contact Us" : "Contáctanos"}</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
