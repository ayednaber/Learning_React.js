// Here we will be creating Custom components. The way this works is by wrapping our HTML
// elements inside functions, and using Pascal's notation and putting our component names in
// <>

// Here, I created a component called "Reason", and then I rendered it inside the root
// element in my HTML page.

/**
 Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

import React from "react"
import ReactDOM from "react-dom"

function Header() {
  return (
    <header>
          <nav>
            <img src="./react-logo.png" width="40px" />
          </nav>
        </header>
  )
}

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
  