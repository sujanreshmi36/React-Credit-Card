import React from "react";

const CreditCard = ({ formData, side }) => {
  const startState = [
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ];
  return (
    <div className="credit-card">
      {side === "front" && (
        <div className="visa-front-side">
          <div className="card-details-container card">
            <div className="detail-container">
              <p>Expiry:</p>
              <h2>{formData.date}</h2>
            </div>
            <div className="detail-container">
              <p>Cardholder:</p>
              <h2>{formData.name}</h2>
            </div>
            <div className="number-display">
              {startState.map((item, index) => {
                return <h3 key={index}>{formData.number[index] || item}</h3>;
              })}
            </div>
          </div>
        </div>
      )}

      {side === "back" && (
        <div className="visa-back-side card">
          <div id="cvv-display">
            <p>{formData.cvv}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
