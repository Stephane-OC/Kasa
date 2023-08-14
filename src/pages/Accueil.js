import React from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import { getAllHousings } from "../services/dataService";
import { useState, useEffect } from "react";

import "../index.css";

/* "Accueil" is a React functional component that serves as main home page of application.                          **
**                                                                                                                  **
** The component is responsible for:                                                                                **
** - Maintaining two pieces of state:                                                                               **
**   - "cards", an array that will store all housing data to be displayed.                                          **
**   - "isLoading", a boolean flag indicating whether housing data is still being loaded or fetched.                **
**                                                                                                                  **
** When the component mounts, useEffect hook:                                                                       **
** - Sets "isLoading" state to false, indicating that data loading is complete.                                     **
** - Invokes "getAllHousings()" function to retrieve all housing data and sets retrieved data to                    **
**   "cards" state.                                                                                                 **
**                                                                                                                  **
** In its render:                                                                                                   **
** - If "isLoading" is false (i.e., data has finished loading), component displays:                                 **
**   - A banner with a predefined class and title.                                                                  **
**   - A container that maps over the "cards" state and renders each housing data as individual "Card" components.  **
**                                                                                                                  **
** Each "Card" is given a unique key based on its "id" to ensure React can efficiently update component tree.       */


function Accueil() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setCards(getAllHousings());
  }, []);

  return (
    <div>
      {!isLoading && (
        <div className="main">
          <Banner
            className="bannerStyleOne"
            title="Chez vous, partout et ailleurs"
          />
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
