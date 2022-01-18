import React from "react"
import ReactDOM from "react-dom"
// Importing our Header from its own file now
import Header from "./Header"

function OrderedList() {
  return (
    <ol>
                <li>It is a skill that is in-demand.</li>
                <li>It allows me to create websites and applications with greater flexibility than Vanilla JavaScript</li>
                <li>I love learning new skills</li>
            </ol>
  )
}

function Footer() {
  return (
    <footer> 2022 Ayed Naber. All rights reserved</footer>
  )
}

// Notice here how we are using the components defined above inside here. This is an example of the composability that we have access to in React.
function Reason() {
    return (
        <>
        <Header />
            <h1>Why I am excited to Learn React!</h1>
            <OrderedList />
            <Footer />
        </>
    )
}

ReactDOM.render(<Reason />, document.getElementById("root"))
  