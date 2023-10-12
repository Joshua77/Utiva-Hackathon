
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
import { useState } from "react";
import "./SignupForm.css"; // Import the CSS file

function SignupPage() {

  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  // const { register, signInWithGoogle } = useAuth();
  return (
    <div className="signup-box">
      <h1>BINVA</h1>
      <h3>Create an account for your Business </h3>
      <form className="form-area">
        <label>Email Address</label>
        <input type="email" placeholder="username@gmail.com" value={email} required onChange={(e) => setEmail(e.target.value)}
          />
        <label>Full Name</label>
        <input type="text" placeholder="Binva Pro" value={fullname} required onChange={(e) => setName(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="**********" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" placeholder="**********" value={password} required onChange={(e) => setPassword(e.target.value)} />
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
