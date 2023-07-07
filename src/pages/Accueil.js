import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import logoFooter from "../assets/logo/footer_logo.png";
import "../index.css";

function Accueil() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCards(data);
      });
  }, []);

  return (
    <div>
      <Header />
      {!isLoading && (
        <div className="main">
          <Banner className="bannerStyleOne"/>
          <div className="housingContainer">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <header className="App-header">
      <img src={logo} className="kasa-logo" alt="logo" />
      <nav id="navbar">
        <ul id="nav-items">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/A_Propos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Card(props) {
  const card = props.card;
  return (
    <div key={card.id} className="housingCard">
      <Link to={"/location/" + card.id}>
        <figure>
          <img src={card.cover} alt={card.title}></img>
          <figcaption>
            <p className="housingTitle">{card.title}</p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
}

function Banner(props) {
  return (
    <div className="bannerWrapper1">
      <div id="bannerContent" className={props.className}></div>
      {props.className === "bannerStyleOne" && (
        <h1 className="bannerHeading">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} className="logo_footer" alt="logo"></img>
      <h2 className="copyrights">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Accueil;
