import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Card.css";

/* "Card" is a React functional component that generates a linkable card in application.                      **
** It accepts a `props` object that contains following property:                                              **
**
** - `card`: an object that represents card details, including:
**     - `id`: a unique identifier for each card, used to generate link and as key for component.             **
**     - `cover`: a string representing URL for image to be displayed on card.                                **
**     - `title`: a string representing title of card.                                                        **
**
** This component is composed of a `div` container with a `Link` component inside. The `Link` component uses  **
** `id` from `card` prop to generate a unique path. Inside `Link` component, a `figure`                       **
** is created with an `img` and a `figcaption` that displays card's title.                                    */

function Card({ card }) {
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

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
