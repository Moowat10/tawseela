import React from "react";
import "../assets/css/profileview.css";
export default function Profileview() {
  return (
    <div className="profile-wrapper">
      <div className="container">
        <div className="up">
          <div className="left">
            <div className="image-frame"></div>
          </div>
          <div className="mid">
            <div className="info">
              <h1>Omar Harb</h1>
              <div className="inputBox">
                <label>Email : </label>
                <h2>omarharb16@yahoo.com</h2>
              </div>
              <div className="inputBox">
                <label>National ID : </label>
                <h2>3123456464099446354</h2>
              </div>
              <div className="inputBox">
                <label>Address : </label>
                <h2>Sidi Gaber</h2>
              </div>
              <div className="inputBox">
                <label>Phone Number : </label>
                <h2>01201674175</h2>
              </div>
            </div>
            <div className="bike-frame"></div>
          </div>
          <div className="right"></div>
        </div>
        <div className="seperator"></div>
        <div className="down"></div>
      </div>
    </div>
  );
}
