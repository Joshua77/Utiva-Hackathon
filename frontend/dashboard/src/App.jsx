import { useState } from "react";
import MainPage from './pages/adminboard/mainpage/mainpage';
import LandingPage from "./LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="home">
        <MainPage />
        
      </div>
    </>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom'
// import SignupForm from "./components/signup/SignupForm"
// import LoginForm from "./components/login/LoginForm"
// import MainPage from './pages/adminboard/mainpage/mainpage';

// function App() {
//   return (
//    <BrowserRouter>
//      <Routes>
//      <Route path='/LoginForm' element={<LoginForm/>} ></Route>
//      <Route path='/SignupForm' element={<SignupForm/>} ></Route>
//      <MainPage />  
//      </Routes>
//    </BrowserRouter>

//   );
// }

// export default App;

