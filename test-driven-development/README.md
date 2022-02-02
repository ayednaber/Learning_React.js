# Learning Test Driven Development

### Brief Introduction
The motive behind Test driven development can be traced back to the waterfall model, where the requirements of the project needed to be known prior to writing code, and testing would be conducted after the code was written. This was very time consuming, which then led to models like the verification and validation model, and the Agile model. But even for Agile, even if the project is being done in small increments, the code was still being written before tests in each of these small increments. Therefore, the motive behind TDD is that tests are written before the code, and the code would need to be minimal, and written in a way to simply just pass the test cases written.

We write the test first, then the test will fail since we do not have any code implemented, then we make sure to write code just to pass the test.

We will be using **Jest**, which is a JavaScript testing framework by Facebook.

It can be installed in your react app by running this in the terminal: `npm install --save-dev jest`

We can also use Enzyme, which is a framework by Airbnb, and it can be installed using `npm i --save-dev enzyme enzyme-adapter-react-16`

### Testing
With our created react app, we already have a file called `App.test.js`, which contains tests. We will use Jest and Enzyme together in order to write test driven development.
First, I wrote a test that checks whether our the 'a' tag in our App component contains 'Learn React', which passes.

Next, I created a button with an id of increment-btn, and its text is Increment. The way to test if its text is Increment using Jest and Enzyme is by writing the following:
```
test("renders a button with text of 'increment'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  })
```

Other than just checking if an element contains specific text, the next challenge comes by testing if the increment button **triggers the click event listener** and
**increments the counter value**.

With Enzyme, this becomes very simple, as we can use the `simulate` method, and check for a `click` event, and then check the text of our `#counter-value` to be 1.
The test will fail at first, because we need to define an `onClick` function for our button inside `App.js`. After including that, then our tests will run successfully.

We also did the same for a decrement button and tested it, and it passes our test.

## CHALLENGE
Now that we have 5 passing tests in our application, once we run the app using `npm start`, then we notice that if we keep decrementing, we reach negative values.
Therefore, what I would normally do is just fix that and then test it, **HOWEVER**, this is TDD, therefore I should write a test first, fail it, and then fix the code for it.

I wrote this test, which checks that if I have a zero in my counter, and then click decrement, then thetext after should also be 0. Running the test initially causes it to fail,
and that is because we have not yet implemented this feature. In my `App.js`, I changed the onClick function to be like so:
`<button id='decrement-btn' onClick={() => counter !== 0 && setCounter(counter - 1)}>Decrement</button>`

Remember how in JavaScript we can use && to combine functions with boolean statements, as the first one determines whether we will run the second one or not. If the first
condition fails, then the application will not continue to see what the second condition even is.


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
