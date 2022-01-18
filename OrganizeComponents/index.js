import React from "react"
import ReactDOM from "react-dom"
// Importing our Header from its own file now
import Header from "./Header"
import OrderedList from "./OrderedList"
import Footer from "./Footer"

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
  