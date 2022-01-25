import React from "react"
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  // State of die arrays
  const [dice, setDice] = React.useState(allNewDice())

  // State of game (indicates if user won or not)
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    let isWon = true
    const diceValue = dice[0].value
    for (let i = 0; i < dice.length; i++) {
      const diceVal = dice[i].value
      const heldProp = dice[i].isHeld
      if (!heldProp && diceVal === diceValue) {
        isWon = false
        break;
      }
    }
    if (isWon) {
      console.log("You won!")
    }}, [dice])

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
    const newDie = allNewDice()
    const newRoll = []
    for (let i = 0; i < dice.length; i++) {
      if (dice[i].isHeld) {
        newRoll.push(dice[i])
      } else {
        const newObject = {
          value: allNewDice()[i].value,
          isHeld: false,
          id: nanoid()
        }
        newRoll.push(newObject)
      }
    }
    setDice(newRoll)
  }

  // function to hold/mark dice
  function holdDice(id) {
    const newHoldDice = []
    for (let i = 0; i < dice.length; i++) {
      const currentDiceId = dice[i].id
      if (id === currentDiceId) {
        const dieObject = {
          id: currentDiceId,
          value: dice[i].value,
          isHeld: !(dice[i].isHeld)
        }
        newHoldDice.push(dieObject)
      } else {
        newHoldDice.push(dice[i])
      }
    }
    setDice(newHoldDice)
  }

  const dieNumbers = dice.map(diceElem => {
    return (
      <Die
        key={diceElem.id}
        value={diceElem.value}
        isHeld={diceElem.isHeld}
        onClick={() => holdDice(diceElem.id)}
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
