import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import { Input, Password } from '../Input/Input';
import "./SignUpForm.css";
import BanexcoinSignup from "../images/individual-sign-up.png";
import Icons from '../Icons/Icons';

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

    const validationInputText = (inputValue) => {
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        const mayusAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        const getArray = inputValue.split('');
        const areThereNumbers = numbers.map( number => {
            return getArray.includes( number )
        })

        const areThereLetters = alphabet.map( letter => {
            return getArray.includes(letter)
        })

        const areThereMayusLetters = mayusAlphabet.map( letter => {
            return getArray.includes(letter)
        })

        const validNumbers = areThereNumbers.filter(element => element === true);
        const validAphabet = areThereLetters.filter(element => element === true);
        const validMayus = areThereMayusLetters.filter(element => element === true);
        
        if(validMayus?.length === 0){
            return "no-Uppercase";
        } else if (validAphabet?.length === 0) {
            return "no-lowercase";
        } else if (validNumbers?.length === 0) {
            return "no-numbers";
        } else {
            return "safe-username";
        }
    }

    const validationEmail = () => {
        const getArray = state.email.email.split('');
        const elements = ["@", "."];

        const getNewArr = elements.map( element => {
            return getArray.includes(element)
        });

        const filterArr = getNewArr.filter( element => element === true )

        if(filterArr?.length === 2) {
            return "valid-email";
        } else {
            return "invalid-email";
        }
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
            setState({
                ...state,
                username: { ...state.username, valid: true },
                email: { ...state.email, valid: true },
                password: { ...state.password, valid: true },
                confirmPassword: { ...state.confirmPassword, valid: true }
            })
            setForm({ ...form, ...state, fieldPhone });
            console.log(form);
    
            // setFieldPhone('')
            // setState({
            //     account: "",
            //     username: { username: '', valid: null },
            //     email: { email: '', valid: null },
            //     password: { password: '', valid: null },
            //     confirmPassword: { confirmPassword: '', valid: null },
            //     code: { countryCode: '', valid: null },
            //     name: { firstName: '', valid: null },
            //     lastname: { lastName: '', valid: null },
            //     address: { address: '', valid: null },
            //     birthdate: { birthdate: '', valid: null },
            //     date: new Date(),
            //     status: 1,
            // });
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
                        <div className="box-field" >
                            <div className="d-flex align-items-center box-field">
                                <label htmlFor="user" className="form-label text-capitalize fw-bold space-circle">
                                    { idiom ? "username" : "usuario" }
                                </label>
                                {
                                    validationInputText(state.username.username) === "safe-username" &&  <Icons type="check" color="green" />
                                }
                            </div>
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
                                <p className="validation-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }

                            {
                                (state.username.username.length >= 7 && validationInputText(state.username.username) === "no-Uppercase") &&
                                <p className="validation-message">{idiom ? "A capital letter required" : "Se requiere una letra mayúscula"}</p>
                            }

                            {
                                (state.username.username.length >= 7 && validationInputText(state.username.username) === "no-lowercase") &&
                                <p className="validation-message">{idiom ? "A lowercase letter is required" : "Se requiere una letra minúscula"}</p>
                            }
                            {
                                (state.username.username.length >= 7 && validationInputText(state.username.username) === "no-numbers") &&
                                <p className="validation-message">{idiom ? "A number is required" : "Se requiere un número"}</p>
                            }
                            {
                                (state.username.username.length < 7 && state.username.username.length > 0) &&
                                <p className="validation-message">{idiom ? "Minimum characters: 7" : "Mínimo de caracteres: 7"}</p>
                            }
                        </div>

                        <div className="box-field">
                            <div className="d-flex align-items-center box-field ">
                                <label htmlFor="email" className="form-label text-capitalize fw-bold space-circle">
                                    {idiom ? "email" : "correo electrónico"}
                                </label>
                                {
                                    validationEmail(state.email.email) === "valid-email" &&  <Icons type="check" color="green" />
                                }
                            </div>
                            <Input 
                                setActive={setActive}
                                active={active}
                                placeholderInput={idiom ? "Email" : "Correo Electrónico"}
                                inputValue={state.email.email}
                                onChangeInput={onChangeEmail}
                                nameIcon="email"
                                nameInput="email"
                                typeInput="text"
                                fieldInput={state.email.email}
                                fieldValid={state.email.valid}
                            />
                            {
                                (state.email.email==="" && state.email.valid === false) && 
                                <p className="validation-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }
                            {
                                (state.email.email.length > 24 && validationEmail()==="invalid-email") &&
                                <p className="validation-message">{idiom ? "Invalid email" : "Email no valido"}</p>
                            }
                        </div>
                        
                        <div className="box-field">
                            <div className="d-flex align-items-center box-field">
                                <label htmlFor="password" className="form-label text-capitalize fw-bold space-circle">
                                    { idiom ? "password" : "contraseña" }
                                </label>
                                {
                                    validationInputText(state.password.password) === "safe-username" &&  <Icons type="check" color="green" />
                                }
                            </div>

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
                                <p className="validation-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }

{
                                (state.password.password.length >= 7 && validationInputText(state.password.password) === "no-Uppercase") &&
                                <p className="validation-message">{idiom ? "A capital letter required" : "Se requiere una letra mayúscula"}</p>
                            }

                            {
                                (state.password.password.length >= 7 && validationInputText(state.password.password) === "no-lowercase") &&
                                <p className="validation-message">{idiom ? "A lowercase letter is required" : "Se requiere una letra minúscula"}</p>
                            }
                            {
                                (state.password.password.length >= 7 && validationInputText(state.password.password) === "no-numbers") &&
                                <p className="validation-message">{idiom ? "A number is required" : "Se requiere un número"}</p>
                            }
                            {
                                (state.password.password.length < 7 && state.password.password.length > 0) &&
                                <p className="validation-message">{idiom ? "Minimum characters: 7" : "Mínimo de caracteres: 7"}</p>
                            }
                        </div>

                        <div className="box-field">
                            <div className="d-flex align-items-center box-field">
                                <label htmlFor="confirm-password" className="form-label text-capitalize fw-bold space-circle">
                                    { idiom ? "Retype Password" : "Reescribir Contraseña" }
                                </label>
                                {
                                    (state.confirmPassword.confirmPassword.length > 0 && state.confirmPassword.confirmPassword === state.password.password) && 
                                        <Icons type="check" color="green" />
                                }
                            </div>

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
                                <p className="validation-message">{idiom ? "Obligatory field" : "Campo obligatorio"}</p>
                            }

                            {
                                (state.confirmPassword.confirmPassword.length > 0 && state.confirmPassword.confirmPassword !== state.password.password) &&
                                <p className="validation-message">{idiom ? "Password is not the same" : "La contraseña no es la misma"}</p>
                            }
                        </div>
                        
                        {/* <div className={ (state.username.username==="" && state.username.valid === null) && "box-field" }>
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
                        
                        <div className={ (state.username.username==="" && state.username.valid === null) && "box-field" }>
                            <label htmlFor="phone" className="form-label text-capitalize fw-bold">phone</label>
                            <PhoneInput 
                                className="form-control phone-input" 
                                id="phone" 
                                name="phone"
                                value={fieldPhone}
                                onChange={setFieldPhone}
                            /> 
                        </div>

                        <div className={ (state.username.username==="" && state.username.valid === null) && "box-field" }>
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
                        
                        <div className={ (state.username.username==="" && state.username.valid === null) && "box-field" }>
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

                        <div className={ (state.username.username==="" && state.username.valid === null) && "box-field" }>
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
                        
                        <div className={ (state.username.username==="" && state.username.valid === null) && "box-field" }>
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

                        <div className="box-circles">
                            <div className={(
                                state.username.valid===true && 
                                state.email.valid===true && 
                                state.password.valid===true &&
                                state.confirmPassword.valid===true
                            ) ? "circle space-circle" : "ready-data space-circle" }></div>
                            <div className={
                                (
                                    state.username.valid===true && 
                                    state.email.valid===true && 
                                    state.password.valid===true &&
                                    state.confirmPassword.valid===true
                                ) ? "ready-data space-circle" : "circle space-circle"
                            }></div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn text-capitalize lh-base align-middle border-2 border-light text-white btn-login"
                        >{ idiom ? "next" : "siguiente " }</button>
                        <h1 className="login-account">
                            { idiom ? "Do you already have an account? " : "¿Ya tienes una cuenta? "}
                            <div className="padding-login-account">
                                <Link to="/" className="footer-link-form">
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
