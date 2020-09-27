import React from "react";
import "./AdvantageCard.css";


function AdvantageCard({ advantages, title, subtitle, icon }) {
  let FA = require("react-fontawesome");

  return (
    <div className="wrap">
      <div className="card">
        <div className="front">
          <div className="front-title">{title}</div>
          <FA
            name={icon}
            size="5x"
            style={{
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
              opacity: "0.8",
              color: "#161616",
            }}
          />
          <div className="front-subtitle">{subtitle}</div>
        </div>
        <div className="back">
          <div className="star-point-wrapper">
            {advantages.map((el) => (
              <div className="star-point">
                <FA
                  name="star-o"
                  style={{
                    textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                    opacity: "0.8",
                    color: "#161616",
                  }}
                />
                <p className="star-point-text">{el}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageCard;
