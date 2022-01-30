import React from 'react'
import "./NavBar.css"
import bpLogo from "./assets/images/berkeleyprojectlogo.png"

export default function NewNavBar() {
    return (
        <div id="navbar">
            <input type="checkbox" id="navbar-checkbox"/>
            <label id="navbar-checkboxlabel" for="navbar-checkbox">
                <div id="navbar-fabars">
                    <div id="navbar-checkboxlabel-one"></div>
                    <div id="navbar-checkboxlabel-two"></div>
                    <div id="navbar-checkboxlabel-three"></div>
                </div>
            </label>
            <a href="homepage"><img id = "navbar-bpLogo"
                src = {bpLogo} 
                alt = "Berkeley Project"/></a>
            <div className="navbar-sidebar">
                <a href="#homepage" className="navbar-buttontext"><div className = "navbar-button">
                    Home
                </div></a>
                <a href="#aboutpage" className="navbar-buttontext"><div className = "navbar-button">
                    About
                </div></a>
                <a href="#contactpage" className="navbar-buttontext"><div className = "navbar-button">
                    Contact
                </div></a>
                <a className="navbar-donate-buttontext"><div className = "navbar-button"
                    id = "navbar-donatebutton">
                    Donate
                </div></a>
            </div>
        </div>
    )
}
