import Banner from "../components/banner"
import Card from "../components/card"
import React from "react";
import { useState, useEffect } from "react";


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
    </div>
  );
}

export default Accueil;
