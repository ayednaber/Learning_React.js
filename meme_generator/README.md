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

## States in React
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
However, the best practice in React is to change the state using a **callback function**. For example:

`setCount(prevCount => prevCount + 1)`

If we have for example an array stored in state, and our updateFunction in the useState does not do what we want, we can always think of our callback function. We give our callback function a parameter, which is the previous value of state, and then we update it however we want.

```
const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
```

Notice in the above code how we are using the `...prevThingsArray`. This syntax in ES6 is really important, because we cannot directly modify our state by saying `thingsArray.push()`, or even directly modify our parameter to the callback function by saying `prevThingsArray.push()`. Therefore, we use the syntax that we specified above, and this will add a new item to the array.


### Another Important Point
If we are storing an **object** in a useState that looks like this:

```
const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
```

And we are trying to update only the `isFavorite` property, then if we put the code below, then it will remove all previous properties and update just the isFavorite property, leaving our object with just one property:

```
function toggleFavorite() {
        setContact(prevContact => {
            return {
                isFavorite: !prevContact.isFavorite
            }
        })
    }
```

Instead, we should add the following line `...prevContact` with a comma, to signify that we are importing the properties of our previous object, and that we do not want to change that. Our updated code will look like:

```
function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
```

## Back to our Meme Generator
Now that we have learned more about useStates in React, we will apply our knowledge in order to finish our meme generator.

We will do that by turning our state into an object, with the following properties:
- `topText`
- `bottomText`
- `randomImage` -- defaulted to a static URL
- `allMemeImages` -- defaulted to the memesData array we imported from `memesData.js`

Now our functionality works, as in getting random images when clicking on the button, however, every time we refresh, we get the same image that was assigned due to the static URL. Therefore, we will learn next how to save state (aka pass state as props).

### Passing State between Components

In this course, we went over the concept of passing state between components through props. It is important to note that state or data in general
cannot be passed between two sibling components, where if any data needs to be shared between components, then the it should be raised up a level, and then this data could be passed from the parent component to its children.

What if we have our `<App />` component, which is rendering 5-6 instances of a `<Box />` component, and each of them have the same fields but different values for their properties. If we want each box to have its local state, there are two main ways:

1- Initialize a local state in the child component, and set its initial value to the `props.state` which was passed with the props to initialize the child component.
2- Use the `toggle()` method in order to keep all states stored in the parent component, where this toggle method will be created in the parent compoennt and then passed along with props.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

