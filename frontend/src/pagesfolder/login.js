import React from 'react'
import { Link } from 'react-router-dom';
const login = () => {
  return (
    <div class="container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/image/maproad.jpg'})` }} >
        <form class="form" id="createAccount">
            <a class="logosignin" href="index.html"><img src="assets/image/Breathe logo.png" alt="" /></a>
            <h1 class="form__title"></h1>
            <div class="form_message form_message--error"></div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Email Address" />
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password" />
                <div class="form__input-error-message"></div>
            </div>
            <p class="form__text">
                <a class="form__link" href="forgetpass.html" id="linkLogin">Forgot Password</a>
            </p>
            <button class="form__button" type="submit"><a href="ordenow.html" class="form__button">Sign In</a></button>
            <p class="form__text">
            <Link class="form__link" id="linkRegistration"to="/register">Don't have an account? register</Link>
            </p>
        </form>
    </div>
  )
}

export default login