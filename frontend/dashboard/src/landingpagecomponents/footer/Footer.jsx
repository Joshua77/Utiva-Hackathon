import React from "react";
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <p className="footerP">Binva is a pioneering KYC compliance platform that incorporates all the necessary Know-Your-Customer(KYC) and Anti-Money Laundering (AML) tools and digital identity services for safe client identity verification, AML screening, and life-cycle management.</p>
            <button className="footerButton">Stay up to date with us! <span>Email</span></button>
            <div className="footerGrid">
                <div>
                    <p className="footerFirstP">Company</p>
                    <p>About Binva</p>
                    <p>Partners</p>
                    <p>Affiliates</p>
                    <p>Careers</p>
                </div>
                <div>
                    <p className="footerFirstP">Support</p>
                    <p>Help</p>
                    <p>Tutorials</p>
                    <p>Resources</p>
                    <p>Contacts</p>
                </div>
                <div>
                    <p className="footerFirstP">Solutions</p>
                    <p>Resolve Dispute</p>
                    <p>Policy Protection</p>
                    <p>Secure Account</p>
                    <p>Platform</p>
                </div>
            </div>
            <ul className="footerList">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
            </ul>
            <div className="footerIcons">
                <ul className="icons">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>English</p>
            </div>
        </div>
    )
}