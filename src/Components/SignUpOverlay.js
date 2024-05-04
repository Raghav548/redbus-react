import React from 'react';
import './overlay.css';


function SignUpOverlay() {
  // Define the function to handle closing the overlay
  function off() {
    document.getElementById("overlay").style.display = "none";
    }

  return (
    <div id="overlay">
      <div className="sign-up">
        <div className="sign-up-pic">
          <img src='/images/Screenshot 2024-03-11 142455.jpg' alt="" />
        </div>
        <div className="sign-up-info">
          <div className="logo-cross">
            <div className="logo">
              <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus Logo" />
            </div>
            <span className="x" onClick={off}>X</span>
          </div>
          <h2>Sign in to avail exciting discounts and cashbacks!!</h2>
          <input type="tel" placeholder="+91 | Enter you mobile number" />
          <button className="otp-btn" >GENERATE OTP (One Time Password)</button>
          <p className="p1"><strong>OR</strong>, Connect using social accounts</p>
          <button className="google-signin" ><img src="/images/google-logo.jpg" alt="Google Logo" />Sign in with Google</button>
          <p className="p2">By signing up, you agree to our <span style={{ color: 'blue' }}>Terms & Conditions</span> and <span style={{ color: 'blue' }}>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
}

export default SignUpOverlay;
