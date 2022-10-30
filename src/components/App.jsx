import React from "react";
import Card from "./Card";
import Emojipedia from "../emojipedia";

console.log(Emojipedia);

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      meaning={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {Emojipedia.map(createCard)}
    </div>
  );
}

export default App;
