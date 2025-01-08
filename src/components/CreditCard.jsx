import React from "react";

const CreditCard = () => {
  return (
    <div className="credit-card">
      <div className="visa-front-side">
        <div className="card-details-container card">
          <div className="detail-container">
            <p>Expiry:</p>
            <h2>XXX</h2>
          </div>
          <div className="detail-container">
            <p>Cardholder:</p>
            <h2>XXXXX</h2>
          </div>
          <div className="number-display">
            <h3>XXXXXXX</h3>
          </div>
        </div>
      </div>
      <div className="visa-back-side card">
        <div id="cvv-display">
          <p>XXX</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
