import React from "react";
import "./CharacterItem.js";

function CharacterItem({ name, status, species, image }) {
  return (
    <div className="character-content">
      <figure className="character-side front">
        <img className="character-img" src={image} alt={name} />
      </figure>
      <figure className="character-side back">
        <span className="character-text">{name}</span>
        <span className="character-text">{status}</span>
        <span className="character-text">{species}</span>
      </figure>
    </div>
  );
}

export default CharacterItem;
