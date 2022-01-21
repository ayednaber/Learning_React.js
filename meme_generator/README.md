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
