import React, { useState } from 'react';
import './signup.scss';

const Signup = ({ emailAddress, onSignupClick, onSignInClick }) => {
  const [ email, setEmail ] = useState(emailAddress || '');
  const [ password, setPassword ] = useState('');

  const onSignIn = (ev) => {
    ev.preventDefault();
    if (email && password) {
      onSignInClick(email, password);
    }
  }

  const onSignUp = (ev) => {
    onSignupClick(email, password);
    ev.preventDefault();
  }

  return (
    <div className="signup">
      <form>
        <h1>Sign In </h1>
        <input
          className="signup__input"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ (ev) => {
            setEmail(ev.target.value)
          } } />
        <input
          className="signup__input"
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ (ev) => {
            setPassword(ev.target.value)
          } } />
        <button className="signup__btn" type="submit" onClick={ onSignIn }> Sign In</button>
        <div className="signup__now">
          New to Netflix? &nbsp;
          <span className="signup__now-span" onClick={ onSignUp }>Sign up now</span>
        </div>
      </form>
    </div>
  );
};

export default Signup;