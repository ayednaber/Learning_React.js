import React from "react"
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  // State of die arrays
  const [dice, setDice] = React.useState(allNewDice())

  // State of game (indicates if user won or not)
  const [tenzies, setTenzies] = React.useState(false)

  const [numRolls, setNumRolls] = React.useState(0)

  React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
        setTenzies(true)
      }
    }, [dice])

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

  function newGame() {
    setDice(allNewDice())
    setTenzies(false)
  }

  function rollDice() {
    if (!tenzies) {
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
      setNumRolls(prevRolls => prevRolls + 1)
      } else {
        // Here we will handle the case when the player wins and wants to play again
        setTenzies(false)
        setDice(allNewDice())
        setNumRolls(0)
      }
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
      <button className="roll" onClick={rollDice}>{tenzies ? "Play Again!" : "Roll"}</button>
      {tenzies && <Confetti />}
      <div className="game-info">
        <h4 className="numRolls">Number of Rolls: {numRolls}</h4>
        <h4 className="timer">Time: 00:00</h4>
      </div>
    </main>
  );
}

export default App;
