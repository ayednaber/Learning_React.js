# Meme Generator (with API)
This project is a clone of the previous `meme_generator` project, but it will
be importing the meme images from an API. I decided to include this in a
separate project to keep the learning points apart, and make this easier to refer to later on.

## Process of Using Data from API
1- GETting the data (fetch)
2- Save the data to **state**

If we use this code snippet to import data from a star wars API and save it to the `starWarsData` state, and then we use `JSON.stringify(starWarsData, null, 2)`, then we can render our data on the screen:

```
fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
```
But, the problem with this code snippet is we didn't place it in a specific function, but rather inside the App component. If we console log a string, this string will be logged infinite times, and it would be stuck in an infinite loop. This is because we are setting the `setStarWarsData(data)`.
Every time we set our state to a new value, the component is re-rendered, and
thus we get a new message in our console log.

We can solve this using **useEffects**.

## Side Effects in React
React is able to deal with anything inside its scope, but it cannot deal with outside effects. These outside effects can be:
- localStorage
- API/database interactions
- Subscriptions (e.g: web sockets)
- Syncing 2 internal states together
- etc.....

Therefore, React gives us a tool to deal with the outside effects called
`useEffect()`

Instead of putting the fetch request like above, it should be inside a `useEffect`, and we define a function, and we **must provide a second parameter to the useEffect**, and it is called a **dependencies array**.
What a dependencies array is a set of elements, and if any of these elements change, then the useEffect will run again.

This can be demonstrated using a simple count app, in this simple code snippet:

```
import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    // side effects
    React.useEffect(function() {
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}
```
In the above code, whenever we click "Add", then we are updating the count in our state by incrementing it by 1. Notice that we passed count into the dependencies array, so whenever we click add, we get a console log of "Component rendered" and "Effect ran". However, if the dependencies array is empty, then adding will only result in "Component rendered" being console logged.


Simple useEffect usage to re-run whenever count updates:
```
React.useEffect(() => {
    console.log("Effect function ran")
}, [count])
```
OR
```
React.useEffect(function() {
    console.log("Effect function ran"), [count]
})
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
