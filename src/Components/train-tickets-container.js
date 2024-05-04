import React from 'react';
import './train-tickets.css';

export default function TrainTicketsContainer() {
  return (
    <div className="train-tickets-container">
      <div className="train-tickets-leftsection">
        <div className="leftsection-heading"> NOW, <span>GET MORE THAN JUST BUS</span> TICKETS WITH REDBUS! </div>

        <div className="train-tickets-button">
          <img src="/images/redRail.svg" alt="Train Tickets" />
          <span>Train Tickets</span>
        </div>

        <div className="book-trains-para">Book IRCTC Train Tickets on redRail simple & superfast booking process with no service fee + no payment gateway charge.</div>

        <div className="book-trains-benefits-list">
          <div className="railAuthorized">
            <img src="/images/railAuthorized.svg" alt="Authorised IRCTC Partner" />
            <span>Authorised IRCTC Partner</span>
          </div>

          <div className="railrefunds">
            <img src="/images/railrefunds.svg" alt="Instant refunds on UPI payments" />
            <span>Instant refunds on UPI payments</span>
          </div>

          <div className="railHasslefree">
            <img src="/images/railHasslefree.svg" alt="Hassle- free customer support" />
            <span>Hassle- free customer support</span>
          </div>
        </div>

        <div className="book-train-button"> 
          <div> Book Train Tickets </div>
          <img src="/images/icons8-arrow-30.png" alt="Arrow Icon" />
        </div>
      </div>

      <div className="train-tickets-rightsection">
        <img src="/images/railPop.svg" alt="Rail Pop" />
      </div>
    </div>
  );
}
