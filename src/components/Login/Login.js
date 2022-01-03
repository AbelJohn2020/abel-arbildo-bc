import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Banexcoin from "../images/banexcoin.png";
import Icons from '../Icons/Icons';

const Login = ({ idiom }) => {
    const [login, setLogin] = useState({});
    const [usernameField, setUsernameField] = useState({ username: '', valid: null });
    const [passwordField, setPasswordField] = useState({ password: '', valid: null });

    const [show, setShow] = useState(false);
    const [active, setActive] = useState('');

    const handleChangeUsername = (e) => {
        setUsernameField({ ...usernameField, username: e.target.value});
    }

    const handleChangePassword = (e) => {
        setPasswordField({ ...passwordField, password: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(usernameField.username === "" && passwordField.password === "") {
            setUsernameField({ ...usernameField, valid: false });
            setPasswordField({ ...passwordField, valid: false });
        } else if(usernameField.username === "") {
            setUsernameField({ ...usernameField, valid: false });
        } else if(passwordField.password === "") {
            setPasswordField({ ...passwordField, valid: false });
        } else {
            setUsernameField({ ...usernameField, valid: true });
            setPasswordField({ ...passwordField, valid: true });

            setLogin({ ...login, usernameField, passwordField });
            setUsernameField({ username: '', valid: null });
            setPasswordField({ password: '', valid: null });
        }
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
                                className={usernameField.username==="" && usernameField.valid === false ? "box-input empty" : (active === "user" ? "box-input active" : "box-input")} 
                                onClick={() => setActive("user")}
                                onBlur={() => setActive("")}
                            >
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="user"
                                    placeholder={idiom ? "Username" : "Usuario"}
                                    value={usernameField.username}
                                    onChange={handleChangeUsername}
                                    autoComplete="off"
                                />
                                <div className="box-icon">
                                    <Icons type="user" color="#495057" />
                                </div>
                            </div>

                            {
                                (usernameField.username==="" && usernameField.valid === false) && 
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
                            {/* {
                                (usernameField.username==="" && usernameField.valid === false) && 
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            } */}
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="password" 
                                className="form-label fw-bolder text-capitalize res"
                            >{idiom ? "password" : "contraseña"}</label>
                            <div 
                                className={passwordField.password==="" && passwordField.valid === false ? "box-input empty" : (active === "password" ? "box-input active" : "box-input")} 
                                onClick={() => setActive("password")}
                                onBlur={() => setActive("")}
                            >
                                <input 
                                    type={show ? "text" : "password"} 
                                    className="form-control" 
                                    id="password" 
                                    placeholder={idiom ? "Password" : "Contraseña"}
                                    value={passwordField.password}
                                    onChange={handleChangePassword}
                                    autoComplete="off"
                                />
                                <div onClick={() => setShow(!show)} className="password box-icon">
                                    <Icons type={show ? "showPassword" : "password"} color="#495057" />
                                </div>
                            </div>

                            {
                                (passwordField.password==="" && passwordField.valid === false) &&
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
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
