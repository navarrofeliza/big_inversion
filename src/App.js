import React from "react";
import "./App.css";
import PersonCard from "./components/MyNewComponent";

function App() {
  return (
    <div>
      <PersonCard firstName="John" lastName="Doe" age={5} hairColor="Blue" />
      <PersonCard
        firstName="Bob"
        lastName="Boberson"
        age={55}
        hairColor="black"
      />
      <PersonCard
        firstName="Jiff"
        lastName="Giff"
        age={41}
        hairColor="Blonde"
      />
      <PersonCard firstName="Gosh" lastName="Darn" age={54} hairColor="Brown" />
    </div>
  );
}

export default App;
