import React, { Component } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../config/Firebase";
import "../assets/css/homeview.css";
import SectionOne from "../views/SectionOne.js";
import SectionTwo from "../views/SectionTwo.js";
import SectionThree from "../views/SectionThree.js";
import SectionFour from "../views/SectionFour.js";

export default class Homeview extends Component {
  state = {
    name: "",
    uiConfig: {
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
    },
  };
  render() {
    const handleText = (event) => {
      if (event.target.id === "name") {
        console.log(this.state.name);
        this.setState({ name: event.target.value });
      }
    };
    return (
      <div className="home-wrapper">
        <div className="section1">
          <div className="center">
            <div className="center-text">
              <h1>Ride your </h1>
              <h1 className="bike">bike</h1>
            </div>
            <button className="create-btn">Register Now</button>
          </div>
        </div>
        <div className="section2">
          <div className="seperator">
            <h1>R E G I S T E R A T I O N</h1>
            <div className="register-form">
              <div className="left">
                <div className="inputBox">
                  <input
                    id="name"
                    onChange={handleText}
                    value={this.static.name}
                    type="input"
                    className="form_field"
                  ></input>
                  <label for="name" className="form_label">
                    Name
                  </label>
                </div>
                <div className="inputBox">
                  <input
                    type="input"
                    value={this.static.nationalId}
                    className="form_field"
                  ></input>
                  <label for="name" className="form_label">
                    National ID
                  </label>
                </div>
                <div className="inputBox">
                  <input type="input" className="form_field"></input>
                  <label for="name" className="form_label">
                    Phone Number
                  </label>
                </div>
                <div className="inputBox">
                  <input type="input" className="form_field"></input>
                  <label for="name" className="form_label">
                    Address
                  </label>
                </div>
                <div className="inputBox">
                  <input type="input" className="form_field"></input>
                  <label for="name" className="form_label">
                    Email
                  </label>
                </div>
                <div className="inputBox">
                  <input type="input" className="form_field"></input>
                  <label for="name" className="form_label">
                    Password
                  </label>
                </div>
                <div className="inputBox">
                  <input type="input" className="form_field"></input>
                  <label for="name" className="form_label">
                    Confirm Password
                  </label>
                </div>
              </div>
              <div className="mid"></div>
              <div className="right">
                <div className="the-card-container">
                  <div className="the-card">
                    <div className="front-card">
                      <div className="text">
                        <h3>
                          Or
                          <br />
                          do
                          <br /> you
                          <br /> prefer
                          <br /> a quick
                        </h3>
                        <h3 className="glow">start?</h3>
                      </div>
                    </div>
                    <div className="back-card">
                      <StyledFirebaseAuth
                        className="third-party"
                        uiConfig={this.state.uiConfig}
                        firebaseAuth={firebase.auth()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
