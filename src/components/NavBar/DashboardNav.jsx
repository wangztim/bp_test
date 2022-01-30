import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import bpLogo from "./assets/images/berkeleyprojectlogo.png";
import { GoogleLogout } from "react-google-login";
import { LoginContext } from "./../../LoginContext";

export default function NewNavBar() {
  const [mNavStatus, setMNavStatus] = React.useState(false);
  const { setLoggedIn } = React.useContext(LoginContext);

  function changeMNav() {
    setMNavStatus(!mNavStatus);
  }

  function closeMNav() {
    if (mNavStatus) {
      setMNavStatus(false);
    }
  }

  function LogOut() {
    setLoggedIn(false);
  }

  return (
    <div id="navbar">
      <div id="navbar-checkboxlabel" onClick={changeMNav}>
        <div id="navbar-fabars">
          <div id="navbar-checkboxlabel-one" />
          <div id="navbar-checkboxlabel-two" />
          <div id="navbar-checkboxlabel-three" />
        </div>
      </div>
      <Link to="/dashboard">
        <a href="#homepage" onClick={closeMNav}>
          <img id="navbar-bpLogo" src={bpLogo} alt="Berkeley Project" />
        </a>
      </Link>
      <div className={`navbar-sidebar ${mNavStatus ? "" : "displaynone"}`}>
        <Link to="/volunteer-edit">
          <a className="navbar-button" href="#aboutpage" onClick={closeMNav}>
            Volunteers
          </a>
        </Link>
        <Link to="/site-edit">
          <a
            className="navbar-button"
            href="#committeepage"
            onClick={closeMNav}
          >
            Sites
          </a>
        </Link>
        <Link to="/lead-edit">
          <a className="navbar-button" href="#contactpage" onClick={closeMNav}>
            Leads
          </a>
        </Link>
        <GoogleLogout
          clientId="518519154529-q0eema18474te4kcgbt950n9t2utcrrl.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="navbar-logoutbutton"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <Link to="/dashboard">
                <a className="navbar-button">Logout</a>
              </Link>
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={LogOut}
        />
      </div>
    </div>
  );
}
