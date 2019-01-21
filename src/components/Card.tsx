import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="poster">
          <div className="poster__img" />
          <div className="poster__info">
            <h1 className="poster__title">Angry Birds</h1>
            <p className="poster__text">
              Find out why the birds are so angry. When an island populated by
              happy, flightless birds is visited by mysterious green piggies,
              it's up to three unlikely outcasts - Red, Chuck and Bomb - to
              figure out what the pigs are up to.
            </p>
          </div>
        </div>
        <a href="#">Find out more</a>
      </div>
    </div>
  );
};

export default Card;
