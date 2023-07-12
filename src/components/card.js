import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

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

export default Card;