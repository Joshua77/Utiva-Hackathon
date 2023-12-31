import "./navbars.css";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbars() {
  return (
    <div className="navbarsContainer">
      <div>
        <ul className="navbarsList">
          <li className="list">Solutions</li>
          <li className="list">Company</li>
          <li className="list">Resources</li>
          <li className="list">Partners</li>
          <li className="list">Customers</li>
        </ul>
      </div>

      <div>
        <NavLink to="/register" name="My URLs">
          {" "}
          <button className="freeTrial">Start your free trial</button>
        </NavLink>
      </div>
    </div>
  );
}
