import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        age: '',
        location: '',
        password: '',
        confirmPassword: ''
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
    }
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image/maproad.jpg'})` }}>
         <div className="container">
        <form className="form" id="createAccount" onSubmit={handleFormSubmit}>
            <Link className="logosignin" to="/"><img src="assets/image/Breathe logo.png" alt="" /></Link>
            <h1 className="form__title">Register</h1>
            <div className="form_message form_message--error"></div>
            <div className="form__input-group">
                <input type="text" id="signupUsername" name='firstName' value={formValue.firstName} onChange={handleInputChange} className="form__input" autoFocus placeholder="First Name" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" className="form__input" name='lastName' value={formValue.lastName} onChange={handleInputChange} autoFocus placeholder="Last Name" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="email" id="signupUsername" name='email' value={formValue.email} onChange={handleInputChange} className="form__input" autoFocus placeholder="Email Address" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" id="signupUsername" name='phoneNumber' value={formValue.phoneNumber} onChange={handleInputChange} className="form__input" autoFocus placeholder="Phone Number" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" id="signupUsername" name='age' value={formValue.age} onChange={handleInputChange} className="form__input" autoFocus placeholder="Age" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" id="signupUsername" name='location' value={formValue.location} onChange={handleInputChange} className="form__input" autoFocus placeholder="Location" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" name='password' value={formValue.password} onChange={handleInputChange} autoFocus placeholder="Password" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" name='confirmPassword' value={formValue.confirmPassword} onChange={handleInputChange} autoFocus placeholder="Confirm password" />
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit">Register</button>
            <p className="form__text">
                <Link className="form__link" id="linkLogin"to="/login">Already have an account? Sign In</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default Registration