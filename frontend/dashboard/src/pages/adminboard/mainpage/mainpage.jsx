import React from "react";
import logo from "../../../assets/binva.png";

import emailicon from "../../../assets/email-icon.png";
import searchicon from "../../../assets/search.png";
import calendaricon from "../../../assets/calendar.png";
import warningicon from "../../../assets/email-icon.png";
import bigcalendar from "../../../assets/big-calendar.png";
import red from "../../../assets/red-health.png";
import yellow from "../../../assets/yellow-health.png";
import green from "../../../assets/green-health.png";
import "./mainpage.css";
import key from "../../../assets/key.png";


function MainPage() {

  return (
    <>
      <section className="">
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-right">
            <div className="navbar-contact">
              <p className="contact">Contact</p>{" "}
              <p className="contact-num">+234-556-666-667</p>
              <img className="nav-icon" src={emailicon} alt="" />
              <img className="nav-icon" src={calendaricon} alt="" />
            </div>
          </div>

          <div className="navbar-btn-section">
            <p className="navbar-merchant-text">Trustfunds</p><p className="t-icon">T</p>
            <div className="navbar-btn">Log Out</div>
          </div>
        </div>

        <div className="nav-bottom">
          <div className="navbar-toggle">
           
          </div>
          <div className="nav-bottom-menu">
            <p className="nav-bottom-menu-item">Name</p>
            <p className="nav-bottom-menu-line"></p>
            <p className="nav-bottom-menu-item">Email</p>
            <p className="nav-bottom-menu-line"></p>
            <p className="nav-bottom-menu-item">Phone</p>
            <p className="nav-bottom-menu-line"></p>
            <p className="nav-bottom-menu-item">Location</p>
            <img className="" src={searchicon} alt="" />
          </div>
        </div>
      </section>


      <section className="mainpage-content">
        <div className="mainpage-content-left">
          <div className="mainpage-content-left-top">
            
            <div className="transactions">
              <h2>Transactions</h2>
              <p className="subheading-text">January - August 2023</p>
              <div className="transactions-calendar">
                <div>
                  <img src={bigcalendar} alt="" />
                </div>
                <div className="calendar-item">
                  <h4>Suspected Activities</h4>
                  <h3>245</h3>
                </div>
              </div>
              <div className="transactions-calendar">
                <div>
                  <img src={bigcalendar} alt="" />
                </div>
                <div className="calendar-item">
                  <h4>Suspected Activities</h4>
                  <h3>245</h3>
                </div>
              </div>
              <div className="transactions-calendar">
                <div>
                  <img src={bigcalendar} alt="" />
                </div>
                <div className="calendar-item">
                  <h4>Suspected Activities</h4>
                  <h3>245</h3>
                </div>
              </div>
            </div>

            <div className="health-score">
              <h2>Security Health Score</h2>
              <div className="health-score-progress">
                <p>PROGRESS SCORE</p>
                <p>Medium Safety</p>
              </div>
              <div className="health-score-text">
                <h4>Not Satisfied?</h4>
                <h4>Secure your online life</h4>
              </div>
              <button className="safety-button">What to do</button>
            </div>
          </div>
          <div className="mainpage-content-left-bottom">
            <h2 className="breach">Breaches</h2>
            <div className="breach-mail">
              <div className="breach-mail-icon">
                <img src={warningicon} alt="" />
              </div>
              robert123123@gmail.com
            </div>
            <li className="breach-text">AAAAAAAAAAAA</li>
            <div className="breach-mail">
              <div className="breach-mail-icon">
                <img src={warningicon} alt="" />
              </div>
              robert123123@gmail.com
            </div>
            <li className="breach-text">AAAAAAAAAAAA</li>
            <div className="breach-mail">
              <div className="breach-mail-icon">
                <img src={warningicon} alt="" />
              </div>
              robert123123@gmail.com
            </div>
            <li className="breach-text">AAAAAAAAAAAA</li>
            <div className="resolve-button">Resolve Breach</div>
          </div>
        </div>

        <div className="mainpage-content-right">
          <div className="company-activity">
            <h2>Company Activity</h2>
            <p className="subheading-text">January - August 2023</p>
            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={green} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust </p>
            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={yellow} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust </p>

            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={green} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust</p>
            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={yellow} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust</p>
          </div>

          <div className="company-activity">
            <p className="subheading-text">Yesterday, July 21 2023.</p>
            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={green} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust </p>
            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={yellow} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust </p>

            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={yellow} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust</p>
            <div className="activity-mail">
              <div className="activity-mail-icon">
                <img src={red} alt="" />
              </div>
              1 hour ago
            </div>
            <p className="activity-text">Admin disabled Leadway Trust</p>
          </div>
        </div>

        <div className="secure-account">
          <div className="secure-account-text">
            Learn to secure your accounts
          </div>
          <div className="subscribe">
            <div className="subscribe-newsletter">
              <div>Subscribe to our Newsletter</div>{" "}
              <div className="email-text">Email</div>
            </div>
          </div>
          <div className="become-merchant">
            <img src={key} alt="become-a-merchant" />{" "}
            <p className="merchant-cta">Become a merchant today!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
