import { nanoid } from "nanoid";
import React from "react";

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = React.useState({
        selAnswer: "",
        answer1: props.allAnswers[0],
        answer2: props.allAnswers[1],
        answer3: props.allAnswers[2],
        answer4: props.allAnswers[3],
        correct_answer: props.correct_answer,
        isCorrect: false
    })

    function chooseAnswer(answerSel) {
        setSelectedAnswer(prevAns => ({
            ...prevAns,
            selAnswer: answerSel
        }))
    }
    console.log(selectedAnswer)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setSelectedAnswer(prevAns => ({
            ...prevAns,
            [name]: value
        }))
        console.log(event.target.value)
      }

    function checkAnswer() {
        console.log(selectedAnswer.selAnswer === props.correct_answer)
    }

    return (
        <div className="question">
            <h2 className="question-text" dangerouslySetInnerHTML={{ __html: props.question}}></h2>
            <div className="answers">
                {props.allAnswers.map(answer => {
                    return (
                        <button 
                            className="ans"
                            key={nanoid()}
                            dangerouslySetInnerHTML={{ __html: answer}}
                            onClick={() => chooseAnswer(answer)}
                        ></button>
                    )
                })}
            </div>
        </div>
    )
}
    // {props.allAnswers.map(ans => (
    //     <p
    //         className="ans"
    //         key={nanoid()}
    //         dangerouslySetInnerHTML={{ __html: ans}}
    //         onClick={() => chooseAnswer(ans)}
    //     ></p>
    // ))}