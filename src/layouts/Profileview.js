import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import profile from "../assets/img/profile.jpg";
import "../assets/css/profileview.css";

function Map() {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 31.30950628774032, lng: 30.06367436288349 }}
    >
      <Marker position={{ lat: 31.30950628774032, lng: 30.06367436288349 }} />
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Profileview() {
  return (
    <div className="profile-wrapper">
      <div className="container">
        <div className="up">
          <div className="left">
            <div className="top">
              <h1>Omar Harb</h1>
            </div>
            <div className="bottom">
              <div className="image-frame"></div>
            </div>
          </div>
          <div className="mid">
            <div className="info">
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
                <h2>+201201674175</h2>
              </div>
            </div>
            <div className="bike-frame"></div>
          </div>
          <div className="right">
            <div
              style={{ height: "100%", width: "100%", borderRadius: "30px" }}
            >
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA2tQG1_Bdg3yO4JQpKbrTKFCBf8uwD5RU`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              />
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="down">
          <div className="data-wrapper">
            <h2>Kilometers</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>2061</h1>
              <label style={{ marginLeft: "5px" }}>km</label>
            </div>
          </div>
          <div className="data-wrapper">
            <h2>Rides</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>20</h1>
            </div>
          </div>
          <div className="data-wrapper">
            <h2>Calories</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>10000</h1>
              <label style={{ marginLeft: "5px" }}>calorie</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
