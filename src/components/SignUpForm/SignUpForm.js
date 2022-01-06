import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./SignUpForm.css";

const SignUpForm = ({ account }) => {
    const [fieldPhone, setFieldPhone] = useState('');
    const [state, setstate] = useState({
        account: account,
        username: { username: '', valid: null },
        password: { password: '', valid: null },
        code: { countryCode: '', valid: null },
        name: { firstName: '', valid: null },
        lastname: { lastName: '', valid: null },
        address: { address: '', valid: null },
        birthdate: { birthdate: '', valid: null },
        date: new Date(),
        status: 1,
    });

    const [form, setForm] = useState({})

    const onChangeUsername = (e) => {
        setstate({...state, username: {...state.username, username: e.target.value}});
    }

    const onChangePassword = (e) => {
        setstate({...state, password: {...state.password, password: e.target.value}});
    }

    const onChangeCountryCode = (e) => {
        setstate({...state, code: {...state.code, countryCode: e.target.value}});
    }

    const onChangeFirstName = (e) => {
        setstate({...state, name: {...state.name, firstName: e.target.value}});
    }

    const onChangeLastName = (e) => {
        setstate({...state, lastname: {...state.lastname, lastName: e.target.value}});
    }

    const onChangeAddress = (e) => {
        setstate({...state, address: {...state.address, address: e.target.value}});
    }

    const onChangeBirthdate = (e) => {
        setstate({...state, birthdate: {...state.birthdate, birthdate: e.target.value}});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ ...form, ...state, fieldPhone });
        console.log(form);

        setFieldPhone('')
        setstate({
            account: "",
            username: { username: '', valid: null },
            password: { password: '', valid: null },
            code: { countryCode: '', valid: null },
            name: { firstName: '', valid: null },
            lastname: { lastName: '', valid: null },
            address: { address: '', valid: null },
            birthdate: { birthdate: '', valid: null },
            date: new Date(),
            status: 1,
        });
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
            <div className="sign-up">
                <p className="text-capitalize fw-bolder text-white lh-base fs-1">sign up</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="user" className="form-label text-capitalize fw-bold text-white">username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="user" 
                            name="username"
                            value={state.username.username}
                            onChange={onChangeUsername}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-capitalize fw-bold text-white">password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            value={state.password.password}
                            onChange={onChangePassword}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="countryCode" className="form-label text-capitalize fw-bold text-white">country code</label>
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
                        <label htmlFor="phone" className="form-label text-capitalize fw-bold text-white">phone</label>
                        <PhoneInput 
                            className="form-control phone-input" 
                            id="phone" 
                            name="phone"
                            value={fieldPhone}
                            onChange={setFieldPhone}
                        /> 
                    </div>

                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label text-capitalize fw-bold text-white">first name</label>
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
                        <label htmlFor="lastName" className="form-label text-capitalize fw-bold text-white">last name</label>
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
                        <label htmlFor="address" className="form-label text-capitalize fw-bold text-white">address</label>
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
                        <label htmlFor="birthdate" className="form-label text-capitalize fw-bold text-white">birthdate</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="birthdate" 
                            name="birthdate"
                            value={state.birthdate.birthdate}
                            onChange={onChangeBirthdate}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button 
                            type="submit" 
                            className="btn btn-warning fw-bolder text-capitalize lh-base align-middle border-2 border-light text-white"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm;
