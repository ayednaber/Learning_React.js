import React from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import {nanoid} from "nanoid";

function App() {
  const APIURL = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple';

  // Creating state for startQuiz
  const [startQuiz, setStartQuiz] = React.useState(false)

  // State for questions
  const [questions, setQuestions] = React.useState([])

  function start() {
    setStartQuiz(prevStartQuiz => !prevStartQuiz)
    console.log("The quiz has started!")
  }

  React.useEffect(function() {
    console.log("Effect ran")
    const questionArray = []
    fetch(APIURL)
    .then(res => res.json())
    .then(data => data.results.map((keyName, i) => {
      const allAnswers = keyName.incorrect_answers
      allAnswers.push(keyName.correct_answer)
      const quesObj = {
        key: i,
        question: keyName.question,
        allAnswers: allAnswers,
        correct_answer: keyName.correct_answer,
        incorrect_answers: keyName.incorrect_answers
      }
      questionArray.push(quesObj)
    }))
    setQuestions(questionArray)
  }, [])

  function convertUnicode(input) {
    return input.replace(/\\u[0-9a-fA-F]{4}/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode);
    });
  }

  const questionElements = questions.map((item) => (
    <Question 
      key={item.key}
      question={item.question}
      correct_answer={item.correct_answer}
      incorrect_answers={item.incorrect_answers}
      allAnswers={item.allAnswers}
    />
  ))
  
  if (!startQuiz) {
    return <Start handleClick={start} />
  } else {
    return (
      <div className="questions-container">
        {questionElements}
        <button className="button-quiz check-answers">Check Answers!</button>
      </div>
    )
  }
}

export default App;
