import logo from "./logo.svg";
import Card from "./components/card";
import "./App.css";
import Board from "./components/board";
import Panel from "./components/panel";
import {
  faAddressBook,
  faAnchor,
  faBicycle,
  faBomb,
  faBook,
  faCoffee,
  faLeaf,
  faPlane,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function App() {
  const icons = [
    faCoffee,
    faLeaf,
    faBook,
    faCar,
    faAnchor,
    faBicycle,
    faBomb,
    faPlane,
  ];
  const usedIcons = [];
  const getIcon = () => {
    let found = false;
    let randomIcon;
    while (!found) {
      const randomIndex = Math.floor(Math.random() * icons.length);
      randomIcon = icons[randomIndex];
      found = usedIcons.filter((i) => i === randomIcon).length < 2;
    }
    usedIcons.push(randomIcon);
    return randomIcon;
  };
  const [cards, setCards] = useState([]);
  useEffect(() => shuffle(), []);
  // Generate the cards to be used in this game.
  const shuffle = () => {
    console.log("shuffling");
    let numberOfColumns = 4;
    let newCards = new Array(numberOfColumns);
    for (let col = 0; col < numberOfColumns; col++) {
      let row = new Array(numberOfColumns);
      for (let i = 0; i < row.length; i++) {
        row[i] = { icon: getIcon(), col: col, row: i };
      }
      cards[col] = row;
    }
    console.log(newCards);
    setCards(newCards);
  };
  // Display a header, then the board and finally the panel with the time.
  return (
    <div className="container">
      <h4>Memory Game</h4>
      <Board cards={cards}></Board>
      <Panel></Panel>
    </div>
  );
}

export default App;
