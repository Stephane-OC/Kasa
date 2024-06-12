import logoFooter from "../../assets/logo/footer_logo.png";

import "./Footer.css";

/* "Footer" is a React functional component that represents footer of webpage.        **
**
** It contains two main parts:                                                        **
** - A logo, which is displayed as an image.                                          **
** - A copyright notice, which is a text message.                                     **
**
** The component does not receive any props and does not maintain any internal state. ** 
** The content and layout of footer are hard-coded within component.                  */

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} className="logo_footer" alt="logo"></img>
      <h2 className="copyrights">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;