import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { HomeScreen, ProfileScreen } from "./screens";
import LoginScreen from "./screens/login/LoginScreen";
import { auth, onAuthStateChanged } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { ROUTE_URL } from "./shared/constants";
import "./App.scss";

function App() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  function authSuccess(user) {
    if (user) {
      const { uid, email } = user;
      dispatch(login({ uid, email }));
    } else {
      dispatch(logout)
    }
  }

  function authFailed(error) {
    alert(error.message);
    dispatch(logout)
  }

  useEffect(() => {
    return onAuthStateChanged(auth, authSuccess, authFailed);
  }, [])

  return (
    <div className="App">
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={1}
        autoClose={1000}
        theme="dark"
        style={{marginRight: -10}}
      />
      <BrowserRouter>
        {
          !user ? <LoginScreen /> : (
            <Routes>
              <Route
                exact
                path={ ROUTE_URL.HOME }
                element={ <HomeScreen /> }
              />
              <Route
                exact
                path={ ROUTE_URL.LOGIN }
                element={ <LoginScreen /> }
              />
              <Route
                exact
                path={ ROUTE_URL.PROFILE }
                element={ <ProfileScreen /> }
              />
            </Routes>
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
