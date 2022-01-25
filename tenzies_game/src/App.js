import React from "react"
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  // State
  const [dice, setDice] = React.useState(allNewDice())

  // Function to generate 10 random numbers for the die
  function allNewDice() {
    const newDie = []
    for (let i = 0; i < 10; i++) {
      const newNum = Math.floor(Math.random() * 6 + 1)
      newDie.push(
        {
          value: newNum,
          isHeld: false,
          id: nanoid()
        })
    }
    return newDie
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const dieNumbers = dice.map(diceElem => {
    return (
      <Die
        key={diceElem.id}
        value={diceElem.value}
        isHeld={diceElem.isHeld}
      />
    )
  })
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <h4 className="information">Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.
      </h4>
      <div className="die">
        {dieNumbers}
      </div>
      <button className="roll" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
