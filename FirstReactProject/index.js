// For this project, we are setting up React the wrong way, by importing scripts in HTML.

// After we imported React, ReactDOM, and Babel in our head in the HTML document,
// I am using the render method from our global ReactDOM variable to render an element.
// First parameter is what I want to render, and the second one is where I want to render it.

ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))