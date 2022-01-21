# Meme Generator - Project 3 in React Course

In this project, we will make the transition from building ordinary static web pages to **dynamic web apps**. Most useful websites on the internet are dynamic web apps and allow for user interaction with the content on the page.

Therefore, to learn about this concept, I will be creating a meme generator, which uses event listeners and states in order to create a meme. The meme picture itself will be fetched from an **API**.

The way we are used to seeing event listeners in Vanilla JavaScript is one of two ways, either we have an `onclick` inside our HTML element, and in it we specify a name of a function, or in the `js` file, we call `.addEventListener("click", ...)`, where click can be changed to any other action, and the three dots would represent a function, that contains the code of what should happen to the element.

Since we are using React here, then we can say for example:
`<button onClick={function() {}}>Click Me</button>`

Notice how we can stuff JavaScript functions inside the onClick,
although this is not recommended as it will clutter up the JSX code, but we can always define our functions above the return statement, and then place them in the onClick, or onMouseOver, or any of the attributes available through JSX.

It is important that we pass our functions in the onClick without the parantheses. If we include the parantheses, then the function will be ran every time we save, but not where we actually want it to run.

Example of onClick event listener in React to get random image URL from data when the button is clicked:
```
export default function Form() {
    function getRandomURL() {
        const memes = memesData.data.memes
        let randomEntry = memes[Math.floor(Math.random()*memes.length)]
        console.log(randomEntry.url)
    }
    return (
        <div className="meme-form">
            <div className="input-text">
                <input type="text" className="top-text" placeholder="Enter top text..."/>
                <input type="text" className="bottom-text" placeholder="Enter bottom text..."/>
            </div>
            <button onClick={getRandomURL} className="get-meme-button">Get a new meme image <FaImage /></button>
        </div>
    )
}
```

As for the below block of code, every time we click the button, a new element is added to the thingsArray. However, the main problem with this is that it is not updating thingsElements. It is not updating the paragraphs on the screen. In Vanilla JavaScript, we would need to select each element using `getElementById`, but in React, it is a **declarative** language, and that is a major benefit of using this JavaScript library.
In order to add another `<p>` element each time we click the button, we need to use **States**. We can think of this as selecting the heart icon on a recipe and it is saved for us for the next time that we visit that website. Something like that
```
function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    function addNewElementToArray() {
        let currentItemNum = thingsArray.length + 1;
        let itemName = "Thing " + currentItemNum;
        thingsArray.push(itemName)
        console.log(thingsArray)
    }
    
    return (
        <div>
            <button onClick={addNewElementToArray}>Add Item</button>
            {thingsElements}
            
        </div>
    )
}
```

#### States in React
States are part of the React library, and we can access them like so. Let's say that we declare this variable as our use state.
`const result = React.useState()`

If we try to console log `result`, then we will get `[undefined, ƒ()]`.

But if we say `const result = React.useState("Hello")`, then console logging it will result in `["Hello", f()]`. **Remember that what we get back is an array, and not a string.**

An important concept here is object destructuring, so instead of using `result[0]`, we can declare the useState like:

`const [result, func] = React.useState("Hello")`

And therefore, console logging result will result in "Hello".

As for the function `func` that is declared, it is used to change the state.

For example, for the above code, if we say `func("Goodbye")`, then it will update the state value to our new value.

The below script has a counter, a plus button, and a minus button, and the current counter is kept in a useState, and its values are being incremented and decremented using the useState function and onClick event listeners:

```
export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [counter, func] = React.useState(0)
    
    function decreaseCounter() {
        func(counter - 1)  
    }
    
    function increaseCounter() {
        func(counter + 1)  
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={decreaseCounter}>–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick={increaseCounter}>+</button>
        </div>
    )
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

