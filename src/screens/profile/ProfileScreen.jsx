import React from 'react';
import './profileScreen.scss'
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../../firebase";
import { ROUTE_URL } from "../../shared/constants";
import { Nav, Profile } from "../../components";

const ProfileScreen = () => {
  const navigate = useNavigate();

  const onSignOutClick = () => {
    signOut(auth)
      .then((res) => {
        navigate(ROUTE_URL.LOGIN);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__container">
        <Profile onSignOut={onSignOutClick} />
      </div>
    </div>
  );
};

export default ProfileScreen;