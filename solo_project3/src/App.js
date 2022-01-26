import React from "react";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

function App() {
  // Creating state for startQuiz
  const [startQuiz, setStartQuiz] = React.useState(false)

  function start() {
    setStartQuiz(prevStartQuiz => !prevStartQuiz)
    console.log("The quiz has started!")
  }

  if (!startQuiz) {
    return <Start handleClick={start} />
  } else {
    return <Quiz />
  }
}

export default App;
