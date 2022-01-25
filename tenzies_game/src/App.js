import React from "react"
import Die from "./components/Die";

function App() {
  // Function to generate 10 random numbers for the die
  function allNewDice() {
    const newDie = []
    for (let i = 0; i < 10; i++) {
      const newNum = Math.floor(Math.random() * 6 + 1)
      newDie.push(newNum)
    }
    console.log(newDie)
  }

  allNewDice()
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <h4 className="information">Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.
      </h4>
      <div className="die">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
      <button className="roll">Roll</button>
    </main>
  );
}

export default App;
