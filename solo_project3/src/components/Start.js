import React from "react";

export default function Start(props) {
    return (
      <main className="intro-container">
        <h1 className="quizzical">Quizzical</h1>
        <h4 className="quiz-desc">Some description if needed</h4>
        <button className="button-quiz" onClick={props.handleClick}>Start Quiz</button>
    </main>
    )
} 