import React, { useState, useEffect } from "react";
import "../assets/css/header.css";
import proficon from "../assets/icons/profile.png";
import carticon from "../assets/icons/cart.png";
import searchicon from "../assets/icons/search.png";

export default function Header() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) setIsPhone(true);
  }, []);
  return isPhone ? ( // For Mobile Display
    <div className="header-wrapper">
      <div className="side">
        <h1>Tawseela</h1>
      </div>
      <div className="side"></div>
    </div> // For PC Display
  ) : (
    <div className="header-wrapper">
      <div className="side">
        <h1>Tawseela</h1>
      </div>
      <div className="side"></div>
    </div>
  );
}
