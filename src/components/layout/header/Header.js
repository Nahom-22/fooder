import React from "react";
import Navbar from "./navbar/Navbar";

import './header.css'

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-left">
          <h3 id="company-name">Fooder</h3>
        </div>
        <div className="header-right">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
