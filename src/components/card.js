import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  //The card needs to be displayed differently depending on:
  // is it face up.
  // is it matched with another card.
  // are there already two cards face up.
  //This is set into the class name that then picks up the correct styles.
  const className =
    "card " +
    (props.matched
      ? "match open show disabled "
      : props.faceUp
      ? "open show disabled "
      : "" + props.parentState.faceUpCards.length > 1
      ? "disabled "
      : "");
  return (
    <li
      className={className}
      onClick={() =>
        props.onFlipped({ id: props.id, icon: props.icon.iconName })
      }
    >
      <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
    </li>
  );
}
export default Card;
