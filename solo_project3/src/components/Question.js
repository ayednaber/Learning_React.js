import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <h2 className="question-text" dangerouslySetInnerHTML={{ __html: props.question}}></h2>
            <div className="answers">
                {props.allAnswers.map(ans => (
                    <p className="ans">{ans}</p>
                ))}
            </div>
        </div>
    )
}