import React, { useState } from 'react';
import './loginHome.scss'

const LoginHome = ({ onSignUpClick }) => {
  const [ email, setEmail ] = useState('')

  function onSignUp(ev) {
    ev.preventDefault();
    if (email) {
      onSignUpClick(email);
    }else {
      alert('Please Enter the email.');
    }
  }

  return (
    <div className="loginHome">
      <h1>Unlimited movies, TV shows and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="loginHome__signUp">
        <form onSubmit={ onSignUp }>
          <input
            className="loginHome__signUp-input"
            type="email"
            placeholder="Email Address"
            value={ email }
            onChange={ (ev) => {
              setEmail(ev.target.value)
            } }
          />
          <button className="loginHome__signUp-btn" onClick={ onSignUp } type="submit">GET STARTED ></button>
        </form>
      </div>
    </div>
  );
};

export default LoginHome;