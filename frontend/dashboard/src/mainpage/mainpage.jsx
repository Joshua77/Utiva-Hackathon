import React from "react";
import logo from "../assets/binva.png";
import emailicon from "../assets/email-icon.png";
import searchicon from "../assets/search.png";
import calendaricon from "../assets/calendar.png";
import warningicon from "../assets/email-icon.png";
import bigcalendar from "../assets/big-calendar.png";
import red from "../assets/red-health.png";
import yellow from "../assets/yellow-health.png";
import green from "../assets/green-health.png";
import "./mainpage.css";

function MainPage() {
  return (
    <>
      <section className="">
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-right">
            <p className="navbar-text"> Contact </p>
            <p className="navbar-text"> +234556666667 </p>
            <img className="navbar-text" src={emailicon} alt="" />
            <img className="navbar-text" src={calendaricon} alt="" />
            <li className="navbar-text">Login</li>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="navbar-toggle">
            <img className="navbar-toggle-icon" src={emailicon} alt="" />
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
              <p>January - August 2023</p>
              <div className="transactions-calendar">
                <div>
                  <img src={bigcalendar} alt="" />
                </div>
                <div className="calendar-item">
                  <h5>Suspected Activities</h5>
                  <p>245</p>
                </div>
              </div>
              <div className="transactions-calendar">
                <div>
                  <img src={bigcalendar} alt="" />
                </div>
                <div className="calendar-item">
                  <h5>Suspected Activities</h5>
                  <p>245</p>
                </div>
              </div>
              <div className="transactions-calendar">
                <div>
                  <img src={bigcalendar} alt="" />
                </div>
                <div className="calendar-item">
                  <h5>Suspected Activities</h5>
                  <p>245</p>
                </div>
              </div>
            </div>

            <div className="health-score">
              <h2>Security Health Score</h2>
              <p>January - August 2023</p>
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
            <h3>Breaches</h3>
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
            <p>January - August 2023</p>
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
            <p>Yesterday, July 21 2023.</p>
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
      </section>
    </>
  );
}

export default MainPage;
