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

  const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0)

  // State for if user is done with quiz or not
  const [quizDone, setQuizDone] = React.useState(false)

  function start() {
    setStartQuiz(prevStartQuiz => !prevStartQuiz)
    console.log("The quiz has started!")
  }

  console.log(questions)

  React.useEffect(function() {
    console.log("Effect ran")
    const questionArray = []
    fetch(APIURL)
    .then(res => res.json())
    .then(data => data.results.map((keyName, i) => {
      const allAnswers = [...keyName.incorrect_answers]
      allAnswers.push(keyName.correct_answer)
      const quesObj = {
        key: i,
        question: keyName.question,
        allAnswers: allAnswers,
        correct_answer: keyName.correct_answer,
        incorrect_answers: keyName.incorrect_answers,
        userSelectedAnswer: ""
      }
      questionArray.push(quesObj)
    }))
    setQuestions(questionArray)
  }, [])

  function chooseAnswer(answer, question_id) {
    const questionsArray = []
    const q_obj = questions[question_id]
    for (let i = 0; i < questions.length; i++) {
      if (i === question_id) {
        const ques_obj = {
          key: question_id,
          question: q_obj.question,
          allAnswers: q_obj.allAnswers,
          correct_answer: q_obj.correct_answer,
          incorrect_answers: q_obj.incorrect_answers,
          userSelectedAnswer: answer
        }
        questionsArray.push(ques_obj)
      } else {
        questionsArray.push(questions[i])
      }
    }
    setQuestions(questionsArray)
  }

  function markQuiz() {
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].userSelectedAnswer === questions[i].correct_answer) {
        correctAnswers++;
      }
    }
    setQuizDone(true)
    setCorrectAnswerCount(correctAnswers)
    return correctAnswers
  }

  const questionElements = questions.map((item) => (
    <div key={item.key} className="question">
      <h2 className="question-text" dangerouslySetInnerHTML={{ __html: item.question}}></h2>
      <div className="answers">
      {item.allAnswers.map((ans, index) => (
        <button
          key={index}
          className="ans"
          dangerouslySetInnerHTML={{ __html: ans}}
          onClick={() => chooseAnswer(ans, item.key)}
          name={ans}
        ></button>
      ))}
      </div>
    </div>
  ))
  
  if (!startQuiz) {
    return <Start handleClick={start} />
  } else {
    return (
      <div className="questions-container">
        {questionElements}
          {!quizDone && <button onClick={markQuiz} className="button-quiz check-answers">Check Answers!</button>}
          {quizDone && <h3 className="end-quiz">You scored {correctAnswerCount}/5 in the quiz!</h3>}
      </div>
    )
  }
}

export default App;
