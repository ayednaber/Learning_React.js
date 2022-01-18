// Here we will be creating Custom components. The way this works is by wrapping our HTML
// elements inside functions, and using Pascal's notation and putting our component names in
// <>

// Here, I created a component called "Reason", and then I rendered it inside the root
// element in my HTML page.

import React from "react"
import ReactDOM from "react-dom"

function Reason() {
    return (
        <>
            <h1>Why I am excited to Learn React!</h1>
            <ol>
                <li>It is a skill that is in-demand.</li>
                <li>It allows me to create websites and applications with greater flexibility than Vanilla JavaScript</li>
                <li>I love learning new skills</li>
            </ol>
        </>
    )
}

ReactDOM.render(<Reason />, document.getElementById("root"))
  