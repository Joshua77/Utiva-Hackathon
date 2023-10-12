import "./navbar.css"
import React from "react";
import Logo from "../images/Logo.png";
import email from "../images/email.png";
import calendar from "../images/calendar.png";

export default function Navbar() {
    return (
    <div className="navbarContainer">
        <div>
            <img src={Logo} alt=""/>
        </div>

        <div>
            <ul className="navbarList">
                <li className="list">Contact </li><li className="list"> +2348134567890</li>
                <li className="list"><img src={email} alt="" /></li>
                <li className="list"><img src={calendar} alt="" /></li>
                <li>Login</li>
            </ul>
        </div>
    </div>
        
    )
}