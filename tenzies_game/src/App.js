import React from "react"
import Die from "./components/Die";

function App() {
  // State
  const [dice, setDice] = React.useState(allNewDice())

  // Function to generate 10 random numbers for the die
  function allNewDice() {
    const newDie = []
    for (let i = 0; i < 10; i++) {
      const newNum = Math.floor(Math.random() * 6 + 1)
      newDie.push(newNum)
    }
    return newDie
  }

  const dieNumbers = dice.map(diceElem => {
    return (
      <Die
        value={diceElem}
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
      <button className="roll">Roll</button>
    </main>
  );
}

export default App;
