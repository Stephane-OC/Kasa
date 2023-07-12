import React from "react";

import logoFooter from "../assets/logo/footer_logo.png";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} className="logo_footer" alt="logo"></img>
      <h2 className="copyrights">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;