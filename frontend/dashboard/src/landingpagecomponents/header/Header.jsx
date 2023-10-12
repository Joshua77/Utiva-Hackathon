import React from "react"
import "./header.css"
import headerImg from "../images/headerImg.jpg";
import Grid from "../grid/Grid";


export default function Header() {
    return (
        <>
            <div className="headerContainer">
            <div className="headerText">
                <h1>Our goal is to safeguard your finances against fraud of all kinds</h1>
                <p className="headerP">We are dedicated to protecting your funds and investments from prying hands with our exclusive wide range of available services at your disposal. 
                <br />
                Your happiness and satisfaction is important to us</p>
               
                <div className="button">
                    <button className="freeTrial">Start your free trial</button>
                    <button className="demo">Request a demo</button>
                </div>
            </div>
            <div>
                <img src={headerImg} alt="Header" />
            </div>
        </div>
        <div className="business">
            <p className="businessP">Used by 20,000+ businesses from small startups to household names</p>
        </div>
        <div className="nextPage">
            <h2>Real-World Fraud Protection Designed With Your Customers in Mind</h2>
            <p className="nextPageP">Binva is a pioneering KYC compliance platform that incorporates all the necessary Know-Your-Customer (KYC) and Anti-Money Laundering (AML) tools and digital identity services for safe client identity verification, AML screening, and lifecycle management.</p>
            <div>
                <Grid />
            </div>
        </div>
        
        </>
        
    );
}