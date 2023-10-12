// import { useState } from "react";
// import "./SignupForm.css";

// function SignupPage() {
//   return (
//     <>
//       <div>
//         <h1>WELCOME TO SIGN UP PAGE</h1>

//       </div>
//     </>
//   );
// }

// export default SignupPage;

import React from "react";
import { Link } from "react-router-dom";
import "./SignupForm.css"; // Import the CSS file

function SignupPage() {
  return (
    <div className="signup-box">
      <h1>BINVA</h1>
      <h3>Create an account for your Business </h3>
      <form className="form-area">
        <label>Email Address</label>
        <input type="email" placeholder="username@gmail.com" />
        <label>Full Name</label>
        <input type="text" placeholder="Binva Pro" />
        <label>Password</label>
        <input type="password" placeholder="**********" />
        <label>Confirm Password</label>
        <input type="password" placeholder="**********" />
        <input type="button" value="Submit" />

        <p className="para-2">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
      <div className="terms-section">
        <p>
          By clicking the Sign Up button, you agree to our <br />
          <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
