// We see here the difference between Vanilla JavaScript and JSX.

// The JSX element was created to make React have more of an imperative experience.
// JSX element is in the first argument of the render method, where as the first few
// lines show what happens if we try to do the same thing using Vanilla JavaScript.

// Makes code more compact and easier to read and maintainable.

// const h1 = document.createElement("h1");
// h1.textContent = "Hello World"
// h1.className = "header"
// console.log(h1);

// ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"));

// -------------------------------

// Creating a Navbar using JSX (styling can be done later)

const navBar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navBar, document.getElementById("root"));