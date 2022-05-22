import React, { useState } from 'react';
import netflixLogo from '../../assets/images/netflix-logo.png'
import { LoginHome, Signup } from "../../components";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { MESSAGES, ROUTE_URL } from "../../shared/constants";
import { toast } from "react-toastify";
import './loginScreen.scss';

const LoginScreen = () => {
  const [ signIn, setSignIn ] = useState(false);
  const [ email, setEmail ] = useState('')
  const navigate = useNavigate();

  function onSignIn(email, password) {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          navigate(ROUTE_URL.HOME)
        }, (error) => {
          toast.error(MESSAGES[error.code])
        })

    }
  }

  function onSignUp(email, password) {
    if (email && !password) {
      setEmail(email);
      setSignIn(true);
    } else if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
          console.log(authUser);
          navigate(ROUTE_URL.PROFILE)
        })
        .catch((error) => {
          alert(error.message);
        })
    }
  }

  return (
    <div className="loginScreen">
      <div className="loginScreen__header">
        <img className="loginScreen__logo" alt="" src={ netflixLogo } />
        <button className="loginScreen__loginBtn" onClick={ () => {
          setSignIn(true)
        } }>Sign In
        </button>
      </div>
      <div className="loginScreen__gradient-bg" />
      <div className="loginScreen__container">
        {
          signIn ? (
            <Signup
              emailAddress={ email }
              onSignupClick={ onSignUp }
              onSignInClick={ onSignIn }
            />
          ) : (
            <LoginHome onSignUpClick={ onSignUp } />
          )
        }
      </div>
    </div>
  );
};

export default LoginScreen;