import React from 'react';
import "./SignUpForm.css";

const SignUpForm = () => {
    return (
        <div className="container-login">
            <div className="sign-up">
                <p className="text-capitalize fw-bolder text-white lh-base fs-1">sign up</p>
                <form className="form">
                    <div className="mb-3">
                        <label htmlFor="user" className="form-label text-capitalize fw-bold text-white">username</label>
                        <input type="text" className="form-control" id="user" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-capitalize fw-bold text-white">password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="countryCode" className="form-label text-capitalize fw-bold text-white">country code</label>
                        <input type="text" className="form-control" id="countryCode" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label text-capitalize fw-bold text-white">phone</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label text-capitalize fw-bold text-white">first name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label text-capitalize fw-bold text-white">last name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label text-capitalize fw-bold text-white">address</label>
                        <input type="text" className="form-control" id="address" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="birthdate" className="form-label text-capitalize fw-bold text-white">birthdate</label>
                        <input type="date" className="form-control" id="birthdate" />
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
