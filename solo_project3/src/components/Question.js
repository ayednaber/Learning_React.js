import { nanoid } from "nanoid";
import React from "react";

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = React.useState("")

    function chooseAnswer(a) {
        setSelectedAnswer(a)
    }

    function checkAnswer(a) {
        if (selectedAnswer === props.correct_answer) {
            console.log("Correct")
        } else {
            console.log("Wrong")
        }
    }

    return (
        <div className="question">
            <h2 className="question-text" dangerouslySetInnerHTML={{ __html: props.question}}></h2>
            <div className="answers">
                {props.allAnswers.map(ans => (
                    <p
                        className="ans"
                        key={nanoid()}
                        dangerouslySetInnerHTML={{ __html: ans}}
                        onClick={() => chooseAnswer(ans)}
                    ></p>
                ))}
            </div>
        </div>
    )
}