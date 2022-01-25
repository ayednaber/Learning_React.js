# Tenzies Game - Project 4

In this section of the course, I will be combining the skills that I accumulated from the beginning of the course, all the way to using the most recent event listeners and hooks (useState and useEffect), and putting it all into one project.

## Objective of the Game
There are 10 die in this game, and there is a Roll button. When the die are rolled, all of them get changed into a random number, the user can click on a dice to mark it, which will make it green on the screen. This makes it so that rolling again will not impact these marked die. The objective of the game is to make all the die have the same number. Once that happens, then the user wins, and can restart the game.

### Re-rolling the die
The die numbers are being held in an array, and stored in a **useState**.
The "Roll" button will have an *onClick event listener*, where whenever it
is clicked, it will run the `setDice()` function from our useState, and
assign it to our function `allNewDice()`.

### Changing Die from Integer Array to Objects
The motive behind this change is that each dice will not only have a number assigned to it, but also, we need to know whether or not it will be **marked**.
Therefore, this change will be reflected in `App.js`.
The object will contain the following properties:
- `value`: which will hold the random number
- `isHeld`: a boolean value indicating if it is held/marked.

**Problem with Key:** Usually in React, when mapping elements, there must
be a key value, and therefore, since we are not importing data from an API,
then we can use a dependency called *nanoid*.
Installed using `npm install nanoid`. This can help generating a random ID for each of our die objects. We assign an id using `id = nanoid()`. As simple as that.


### isHeld Conditional Styling
This feature in our project is important, where whenever we have the `isHeld`
property to be true, then we will style it accordingly.

### Holding/Marking a Dice
Instead of storing state in each dice component, we will store the state in our parent component `<App />`. We will create a function `holdDice()`.

Now that we have been able to mark our dice upon clicking it, the next feature
that we need to work on is making sure that when we roll, the marked die do not get affected. The way I will be doing this is by **updating the `rollDice()` function**. Currently it is just a one-liner, setting the dice array to
the output of `allNewDice()`, but now, there has to be conditions.

### Winning the Game
As shown in `App.js`, a state called `tenzies` was added which signifies
whether or not a user has won the game, and it has been initialized to false.
We can keep track of changes in the dice array by the `useEffect` hook.
We will need to constantly check the dice array for winning conditions.
The conditions:
- All die have the same value
- All are held

We will place this functionality inside the useEffect, and our dependency array will be dice.

There is a really handy function in JavaScript called `.every()`, which can be called on arrays, where basically, we will use to check if every element in the array passes a boolean statement.

When the user wins, then the button text will change togive the user a chance to play again. This is dependent on the `tenzies` state. If `tenzies` is true,
then we will also render confetti as a fun addition.
The `<Confetti />` component is rendered as part of the `react-confetti`
dependency. Install using `npm install react-confetti`.

## After Winning - Starting a New Game
After the user wins, our game currently just changes the text of the "Roll" button to "Play Again!", however, it does not reset the die. Therefore,
there are two ways of handling this, either have two buttons, and render one
of them depending on the circumstances, or modify the rollDice function, which is the approach that we will take.
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
