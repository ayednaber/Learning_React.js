// import React from "react"
// import ReactDOM from "react-dom"

// const navBar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navBar, document.getElementById("root"))

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  import React from "react"
  import ReactDOM from "react-dom"
  
  const samplePage = (
      <div>
          <img src="./react-logo.png" width="40px" />
          <h1>Fun Facts About React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained all over Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
  )
  
  ReactDOM.render(samplePage, document.getElementById("root"))
  