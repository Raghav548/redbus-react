import React from 'react'
import './Header.css'

export default function Header() {
    function on() {
        document.getElementById("overlay").style.display = "block";
        }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
        }
  return (
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

    <div className="header-body">
    <div className="left-section">
        <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus" className="rb_logo" title="redBus" />
        <div className="left-section2" style={{ color: 'rgb(194, 187, 187)' }}>&#124;</div>
    </div>
    <div className="middle-section">
        <div className="bus-ticket">
            <img src='/images/icons8-bus-50.png' />
            <span className="middle-text">Bus Tickets</span>
        </div>
        <div className="cab-rental">
            <img className="img_rb_vertical" src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" alt="Online Cab Booking" title="Online Cab Booking" />
            Cab Rental
        </div>
        <div className="train-tickets">
            <img className="img_rb_vertical" src="https://st.redbus.in/web/images/layout/rail_vertical.svg" alt="Online Train Tickets Booking" title="Online Train Tickets Booking" />
            <span className="middle-text">Train Tickets</span>
        </div>
    </div>
    <div className="right-section" style={{ backgroundColor: 'white' }}>
        <div className="help">
            <span className="material-symbols-outlined">headset_mic</span>
            <span>Help</span>
        </div>
        <div className="Account" onClick={on}>
            <span className="material-symbols-outlined">account_circle</span>
            <span>Account</span>
        </div>
    </div>
</div>
</>

      
    
  )
}


