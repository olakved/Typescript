import React from "react";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    first: "Lekan",
    last: "Michael",
  };
  return (
    <>
      <div>
        <Greet name="Lekan" messageCount={20} isLoggedIn={false} />
        <Person name={personName} />
      </div>
    </>
  );
}

export default App;
