import React from "react";
import Navbar from "../header/navbar/Navbar";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-left">
          <h3 id="company-name">Fooder</h3>
        </div>
        <div className="footer-right">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Footer;
