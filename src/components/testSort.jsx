import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./testSort.css";
import { GoogleLogout } from "react-google-login";
import { LoginContext } from "./../LoginContext";
import BPDayToggle from "./BPDayToggle";

export default function testSort() {
  const { setLoggedIn } = React.useContext(LoginContext);

  function Logout() {
    setLoggedIn(false);
  }

  async function sortFormData() {
    try {
      await axios.post("https://the-berkeley-project-website.appspot.com:8080/server/sort-form-data");
    } catch (err) {
      alert(err);
    }
  }

  async function matchVolunteersToSites() {
    try {
      await axios.get("https://the-berkeley-project-website.appspot.com:8080/server/match-volunteers-to-sites");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="ts-big">
      <div className="ts-small">
        <button onClick={sortFormData} type="button" className="ts-button">
          Sort Form Data
        </button>
      </div>
      <div className="ts-small">
        <button
          onClick={matchVolunteersToSites}
          type="button"
          className="ts-button"
        >
          Match Volunteers to Sites
        </button>
      </div>
      <BPDayToggle />
      <GoogleLogout
        clientId="518519154529-q0eema18474te4kcgbt950n9t2utcrrl.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="ts-button-logout"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <Link to="/dashboard" className="ts-button-link">
              Logout
            </Link>
          </button>
        )}
        buttonText="Logout"
        onLogoutSuccess={Logout}
      />
    </div>
  );
}
