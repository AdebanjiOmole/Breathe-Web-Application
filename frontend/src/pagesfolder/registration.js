import React from 'react'
import { Link } from 'react-router-dom'

const registration = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image/maproad.jpg'})` }}>
         <div class="container">
        <form class="form" id="createAccount">
            <Link class="logosignin" to="/"><img src="assets/image/Breathe logo.png" alt="" /></Link>
            <h1 class="form__title">Register</h1>
            <div class="form_message form_message--error"></div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="First Name" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Last Name" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Email Address" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Phone Number" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Age" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Location" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Confirm password" />
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Register</button>
            <p class="form__text">
                <Link class="form__link" id="linkLogin"to="/login">Already have an account? Sign In</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default registration