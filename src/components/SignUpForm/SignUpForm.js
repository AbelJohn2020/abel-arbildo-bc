import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import { Input, Password } from '../Input/Input';
import "./SignUpForm.css";
import BanexcoinSignup from "../images/individual-sign-up.png";

const SignUpForm = ({ account, idiom }) => {
    const [fieldPhone, setFieldPhone] = useState('');
    const [state, setState] = useState({
        account: account,
        username: { username: '', valid: null },
        email: { email: '', valid: null },
        password: { password: '', valid: null },
        confirmPassword: { confirmPassword: '', valid: null },
        code: { countryCode: '', valid: null },
        name: { firstName: '', valid: null },
        lastname: { lastName: '', valid: null },
        address: { address: '', valid: null },
        birthdate: { birthdate: '', valid: null },
        date: new Date(),
        status: 1,
    });

    const [form, setForm] = useState({});
    const [active, setActive] = useState("");
    const [show, setShow] = useState({
        password: false,
        confirmPassword: false,
    })

    const onChangeUsername = (e) => {
        setState({...state, username: {...state.username, username: e.target.value}});
    }

    const onChangeEmail = (e) => {
        setState({...state, email: {...state.email, email: e.target.value}});
    }

    const onChangePassword = (e) => {
        setState({...state, password: {...state.password, password: e.target.value}});
    }

    const onChangeConfirmPassword = (e) => {
        setState({...state, confirmPassword: {...state.confirmPassword, confirmPassword: e.target.value}});
    }

    const onChangeCountryCode = (e) => {
        setState({...state, code: {...state.code, countryCode: e.target.value}});
    }

    const onChangeFirstName = (e) => {
        setState({...state, name: {...state.name, firstName: e.target.value}});
    }

    const onChangeLastName = (e) => {
        setState({...state, lastname: {...state.lastname, lastName: e.target.value}});
    }

    const onChangeAddress = (e) => {
        setState({...state, address: {...state.address, address: e.target.value}});
    }

    const onChangeBirthdate = (e) => {
        setState({...state, birthdate: {...state.birthdate, birthdate: e.target.value}});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(
            state.username.username==="" && 
            state.email.email==="" && 
            state.password.password==="" && 
            state.confirmPassword.confirmPassword===""
        ) {
            setState({
                ...state,
                username: { ...state.username, valid: false },
                email: { ...state.email, valid: false },
                password: { ...state.password, valid: false },
                confirmPassword: { ...state.confirmPassword, valid: false }
            })

        } else {
            setForm({ ...form, ...state, fieldPhone });
            console.log(form);
    
            setFieldPhone('')
            setState({
                account: "",
                username: { username: '', valid: null },
                email: { email: '', valid: null },
                password: { password: '', valid: null },
                confirmPassword: { confirmPassword: '', valid: null },
                code: { countryCode: '', valid: null },
                name: { firstName: '', valid: null },
                lastname: { lastName: '', valid: null },
                address: { address: '', valid: null },
                birthdate: { birthdate: '', valid: null },
                date: new Date(),
                status: 1,
            });
        }

    }

    // const passwordMessage = () => {
    //     if(passwordField.password.length >= 2) {
    //         const getPassword = passwordField.password.split('');
    //         const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //         const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    //         console.log(getPassword)
            
    //         // setPasswordField({ ...passwordField, valid: true });
    //     } else {
    //         // return "worng"
    //         console.log("wrong");
    //     }
    // }

    return (
        <div className="container-login">
            <div className='box-banexboin'>
                <img src={BanexcoinSignup} alt="A client signup to banexcoin" className="banexcoin" />
            </div>
            <div className="sign-up">
                <div className='box-signup-form'>
                    <div className="title-information">
                        <h1 className="title">
                            {idiom ? "The future is not predicted, " : "El futuro no se predice, "}
                            <div>{idiom ? "It is created" : "se crea"}</div>
                        </h1>
                        {
                            account === "natural"
                                ?   <p className="account-type">
                                        {idiom ? "Individual account registration" : "Registro de cuenta individual"}
                                    </p>
                                :   <p className="account-type">
                                        {idiom ? "Entity account registration" : "Registro de cuenta jurídica"}
                                    </p>
                        }
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="user" className="form-label text-capitalize fw-bold">
                                { idiom ? "username" : "usuario" }
                            </label>
                            <Input 
                                setActive={setActive}
                                active={active}
                                placeholderInput={idiom ? "Username" : "Usuario"}
                                inputValue={state.username.username}
                                onChangeInput={onChangeUsername}
                                nameIcon="user"
                                nameInput="user"
                                typeInput="text"
                                fieldInput={state.username.username}
                                fieldValid={state.username.valid}
                            />
                            {
                                (state.username.username==="" && state.username.valid === false) && 
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-capitalize fw-bold">
                                {idiom ? "email" : "correo electrónico"}
                            </label>
                            <Input 
                                setActive={setActive}
                                active={active}
                                placeholderInput={idiom ? "Email" : "Correo Electrónico"}
                                inputValue={state.email.email}
                                onChangeInput={onChangeEmail}
                                nameIcon="email"
                                nameInput="email"
                                typeInput="email"
                                fieldInput={state.email.email}
                                fieldValid={state.email.valid}
                            />
                            {
                                (state.email.email==="" && state.email.valid === false) && 
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-capitalize fw-bold">
                                { idiom ? "password" : "contraseña" }
                            </label>

                            <Password 
                                setActive={setActive}
                                placeholderInput={idiom ? "Password" : "Contraseña"}
                                inputValue={state.password.password}
                                onChangeInput={onChangePassword}
                                nameInput="password"
                                active={active}
                                show={show.password}
                                onClickIcon={() => setShow({...show, password: !show.password})}
                                fieldInput={state.password.password}
                                fieldValid={state.password.valid}
                            />
                            {
                                (state.password.password==="" && state.password.valid === false) && 
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirm-password" className="form-label text-capitalize fw-bold">
                                { idiom ? "Retype Password" : "Reescribir Contraseña" }
                            </label>

                            <Password 
                                setActive={setActive}
                                placeholderInput={idiom ? "Retype Password" : "Reescribir Contraseña"}
                                inputValue={state.confirmPassword.confirmPassword}
                                onChangeInput={onChangeConfirmPassword}
                                nameInput="confirm-password"
                                active={active}
                                show={show.confirmPassword}
                                onClickIcon={() => setShow({...show, confirmPassword: !show.confirmPassword})}
                                fieldInput={state.confirmPassword.confirmPassword}
                                fieldValid={state.confirmPassword.valid}
                            />
                            {
                                (state.confirmPassword.confirmPassword==="" && state.confirmPassword.valid === false) && 
                                <p className="empty-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
                        </div>
                        
                        {/* <div className="mb-3">
                            <label htmlFor="countryCode" className="form-label text-capitalize fw-bold">country code</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="countryCode" 
                                name="countryCode"
                                value={state.code.countryCode}
                                onChange={onChangeCountryCode}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label text-capitalize fw-bold">phone</label>
                            <PhoneInput 
                                className="form-control phone-input" 
                                id="phone" 
                                name="phone"
                                value={fieldPhone}
                                onChange={setFieldPhone}
                            /> 
                        </div>

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label text-capitalize fw-bold">first name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                name="firstName"
                                value={state.name.firstName}
                                onChange={onChangeFirstName}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label text-capitalize fw-bold">last name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="lastName" 
                                name="lastName"
                                value={state.lastname.lastName}
                                onChange={onChangeLastName}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label text-capitalize fw-bold">address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                name="address"
                                value={state.address.address}
                                onChange={onChangeAddress}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="birthdate" className="form-label text-capitalize fw-bold">birthdate</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="birthdate" 
                                name="birthdate"
                                value={state.birthdate.birthdate}
                                onChange={onChangeBirthdate}
                            />
                        </div> */}

                        <button 
                            type="submit" 
                            className="btn text-capitalize lh-base align-middle border-2 border-light text-white btn-login"
                        >{ idiom ? "next" : "siguiente " }</button>
                        <h1 className="login-account">
                            { idiom ? "Do you already have an account? " : "¿Ya tienes una cuenta? "}
                            <div className="padding-login-account">
                                <Link to="/" className="footer-links">
                                    { idiom ? "login" : "iniciar sesión"}
                                </Link>
                            </div>
                        </h1>

                    </form>
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
        </div>
    )
}

export default SignUpForm;
