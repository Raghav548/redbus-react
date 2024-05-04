import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="upper-section">
        <div className="first-section">
          <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus Logo" />
          <p>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
        </div>
        <div className="second-section">
          <span className="title">About redBus</span>
          <span>About us</span>
          <span>Investor relations</span>
          <span>Contact us</span>
          <span>Mobile version</span>
          <span>redbus on mobile</span>
          <span>Sitemap</span>
          <span>Offers</span>
          <span>Careers</span>
          <span>Values</span>
        </div>
        <div className="third-section">
          <span className="title">Info</span>
          <span>T&C</span>
          <span>Privacy policy</span>
          <span>FAQ</span>
          <span>Blog</span>
          <span>Bus operator registration</span>
          <span>Agent registration</span>
          <span>Insurance partner</span>
          <span>User agreement</span>
          <span>Primo Bus</span>
          <span>Bus Timetable</span>
        </div>
        <div className="fourth-section">
          <span className="title">Global Sites</span>
          <span>India</span>
          <span>Singapore</span>
          <span>Malaysia</span>
          <span>Indonesia</span>
          <span>Peru</span>
          <span>Colombia</span>
        </div>
        <div className="fifth-section">
          <span className="title">Our Partners</span>
          <span>Goibibo Bus</span>
          <span>Goibibo Hotels</span>
          <span>Makemytrip Hotels</span>
        </div>
      </div>
      <div className="lower-section">
        <div className="leftmost-section">
          Ⓒ 2024 Redbus India Pvt Ltd. All rights reserved
        </div>
        <div className="rightmost-section">
          <img src="https://st.redbus.in/web/images/layout/social_facebook_new.svg" alt="Facebook" />
          <img src="https://st.redbus.in/web/images/layout/social_linkedin_new.svg" alt="LinkedIn" />
          <img src="https://st.redbus.in/web/images/layout/social_twitter_new.svg" alt="Twitter" />
          <img src="https://st.redbus.in/web/images/layout/social_instagram_new.svg" alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
