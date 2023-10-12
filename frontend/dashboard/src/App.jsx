// import { useState } from "react";
// import MainPage from './pages/adminboard/mainpage/mainpage';
// import LandingPage from "./LandingPage";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="home">
//         <MainPage />
        
//       </div>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import SignupPage from "./components/signup/SignupForm"
import LoginForm from "./components/login/LoginForm"
import MainPageLayout from './pages/adminboard/mainpage/LayoutMainpage';
// import MainPage from './pages/adminboard/mainpage/mainpage';
import LandingPage from "./LandingPage";

function App(props) {
return (
  <Router>
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/admin" element={<MainPageLayout />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/register" element={<SignupPage />} />
      {/* <Route exact path="/account" element={<MainPage />} /> */}
      </Routes>
  </Router>

 );
}
 export default App;

