import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
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
            <h1 className="form__title">Sign In</h1>
            <div className="form_message form_message--error"></div>
            
            <div className="form__input-group">
                <input type="email" id="signupUsername" name='email' value={formValue.email} onChange={handleInputChange} className="form__input" autoFocus placeholder="Email Address" />
                <div className="form__input-error-message"></div>
            </div>

            <div className="form__input-group">
                <input type="password" className="form__input" name='password' value={formValue.password} onChange={handleInputChange} autoFocus placeholder="Password" />
                
                <div className="form__input-error-message"></div>
            </div>

            <button className="form__button" type="submit">Sign In</button>
            <p className="form__text">
                <Link className="form__link" id="linkLogin"to="/login">Don't have an account? Register</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default Login