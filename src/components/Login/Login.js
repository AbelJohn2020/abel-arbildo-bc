import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Banexcoin from "../images/banexcoin.png";

const Login = ({ idiom }) => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

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
                <div className="login__title">
                    <h1 className="login__title--name">
                        {idiom ? "We are" : "Somos"} <div>Banexcoin</div>
                    </h1>
                    <p className="text-capitalize login__subtitle--name">
                        {idiom ? "login" : "iniciar sesion"}
                    </p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label 
                            htmlFor="user" 
                            className="form-label text-capitalize fw-bolder res"
                        >{idiom ? "username" : "usuario"}</label>
                        <input 
                            type="text" 
                            className="form-control border-white border-2" 
                            id="user"
                            placeholder={idiom ? "Username" : "Usuario"}
                            value={login.username}
                            onChange={handleChangeUsername}
                        />
                    </div>

                    <div className="mb-3">
                        <label 
                            htmlFor="password" 
                            className="form-label fw-bolder text-capitalize res"
                        >{idiom ? "password" : "contraseña"}</label>
                        <input 
                            type="password" 
                            className="form-control border-white border-2" 
                            id="password" 
                            placeholder={idiom ? "Password" : "Contraseña"}
                            value={login.password}
                            onChange={handleChangePassword}
                        />
                    </div> 
                    <button 
                        type="submit" 
                        className="btn btn-warning fw-bolder text-capitalize lh-base align-middle border-2 border-light text-white btn-login"
                    >{idiom ? "login" : "iniciar sesion"}</button>
                    <Link 
                        to="/signup" 
                        className="btn btn-warning fw-bolder text-capitalize lh-base align-middle border-2 border-light text-white signup"
                    >{idiom ? "sign up" : "registrarse"}</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
