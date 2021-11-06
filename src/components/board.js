import react, { useState } from "react";
import Card from "./card";

// this component represents the board the game is played on.
function Board(props) {
  const [state, setState] = useState({
    faceUpCards: [],
    matchedCards: [],
    cards: props.cards,
  });

  //When a card is flipped over I need to check if there is a match and set the state accordingly.
  const flipped = (data) => {
    const newFaceUpCards = state.faceUpCards.map((c) => c);
    newFaceUpCards.push(data);

    var matches = state.matchedCards.map((m) => m);
    if (
      newFaceUpCards.length > 1 &&
      newFaceUpCards[0].icon == newFaceUpCards[1].icon
    ) {
      matches.push(newFaceUpCards[0]);
      matches.push(newFaceUpCards[1]);
    }

    if (newFaceUpCards.length > 1) {
      setTimeout(() => {
        console.log("setting state to ", {
          faceUpCards: [],
          matchedCards: matches,
          cards: state.cards,
        });
        setState({
          faceUpCards: [],
          matchedCards: matches,
          cards: state.cards,
        });
      }, 500);
    }
    setState({
      faceUpCards: newFaceUpCards,
      matchedCards: matches,
      cards: state.cards,
    });
  };
  return (
    <ul className="deck" id="card-deck">
      {state.cards.map((col) =>
        col.map((row) => {
          return (
            <Card
              icon={row.icon}
              parentState={state}
              id={`${row.col}_${row.row}`}
              faceUp={
                state.faceUpCards.filter(
                  (m) => m.id === `${row.col}_${row.row}`
                ).length > 0
              }
              onFlipped={flipped}
              matched={
                state.matchedCards.filter(
                  (m) => m.id === `${row.col}_${row.row}`
                ).length > 0
              }
              key={`Cards_${row.col}_${row.row}`}
            ></Card>
          );
        })
      )}
    </ul>
  );
}
export default Board;
