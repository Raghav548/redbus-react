import React from 'react';
//import busIcon from './icons8-get-on-bus-30.png';
//import busOffIcon from './icons8-get-off-bus-30.png';
//import calendarIcon from './icons8-calendar-30.png';
import './Allu-arjun-box.css';
import './search-bar.css';

export default function AlluArjunBox() {
  return (
    <>
      <div className="allu-arjun-box">
        <div className="search-bar">
          <div className="from-box">
            <div className="search-bar-icon"><img src='/images/icons8-get-on-bus-30.png' alt="" /></div>
            <input type="text" placeholder="From" />
          </div>
          <div className="to-box">
            <div className="search-bar-icon"><img src='/images/icons8-get-off-bus-50.png' alt="" /></div>
            <input type="text" placeholder="To" />
          </div>
          <div className="date-box">
            <div className="search-bar-icon"><img src='/images/icons8-calendar-24.png' alt="" /></div>
            <input type="text" placeholder="Date" />
          </div>
          <div className="search-button-box">
            <button className="search-button">SEARCH BUSES</button>
          </div>
        </div>
      </div>
    </>
  )
}
