import React from "react";
import "./NavBar.css";
import { Link } from "wouter";
import bpLogo from "./assets/images/berkeleyprojectlogo.png";
import CommitteePage from "../../pages/CommitteePage/CommitteePage";

export default function NewNavBar() {
  const [mNavStatus, setMNavStatus] = React.useState(false);

  function changeMNav() {
    setMNavStatus(!mNavStatus);
  }

  function closeMNav() {
    if (mNavStatus) {
      setMNavStatus(false);
    }
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
      <Link href="/#homepage" onClick={closeMNav}>
        <img id="navbar-bpLogo" src={bpLogo} alt="Berkeley Project" />
      </Link>
      <div className={`navbar-sidebar ${mNavStatus ? "" : "displaynone"}`}>
        <a
          className="navbar-button"
          href="/#aboutpage"
          onClick={closeMNav}
        >
          About
        </a>
        <a className="navbar-button" href="/#contactpage" onClick={closeMNav}>
          Contact
        </a>
        <Link className="navbar-button" href="/committees" onClick={closeMNav}>
          Committees
        </Link>
        <Link className="navbar-button" href="/faq" onClick={closeMNav}>
          FAQ
        </Link>
        <a
          className="navbar-button"
          id="navbar-donatebutton"
          onClick={closeMNav}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
