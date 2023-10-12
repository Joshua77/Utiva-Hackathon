// import { useState } from "react";
// import "./LoginForm.css"

// function LoginForm() {
//   return (
//     <>
//       <div>
//         <h2>WELCOME TO LOGIN PAGE</h2>
        
//       </div>
//     </>
//   );
// }

// export default LoginForm;



import React from 'react';
import './LoginForm.css'; // Import the CSS file
import { Link } from 'react-router-dom';
function LoginForm() {

  return (
    <div className="login-box">
      <h2>Login | BINVA </h2>
      <form className='form-area'>
        <label>Email Address</label>
        <input type="email" placeholder="username@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="*************" />
        <input type="button" value="Submit" />
      </form>
      <p className="para-2">
       <a href='#'>Forget Password </a>Not have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginForm;