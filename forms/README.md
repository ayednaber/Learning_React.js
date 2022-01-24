# Forms in React

Forms are known to be the weak point of React, but it is important to know how to deal with them and use them.

The main difference with using forms in React as opposed to having PHP or Vanilla JS handle the data is that there is an `onChange` event listener that listens to the data with every keystroke that we make, as opposed to submitting the data at the very end.

If we have this simple code snippet for example:
```
import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    function handleChange(event) {
        console.log(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
```

Every time we enter a letter into our input field, we get a console log of the current value in that field. This is the main difference in React.

There is a concept called **Controlled components**, which basically means that we update our values in state whenever we hit a keystroke inside one of the inputs. The way this is achieved is by adding a value field in the input, which is equal to the current value stored in the state. This can be shown in the code.

However, much like forms in regular HTML, we have other types of inputs, such as textarea, radio buttons, checkboxes and more. Thus, this needs to be taken into account when also developing forms in React.

I will add a textarea, and store its value as `comments` in my state. This can be demonstrated in the code.


#### Checkboxes

As for **checkboxes**, their tag in react is `<input type="checkbox" />`. To keep track of this in our state, instead of using a value property, we will use the `checked` property. We will assign a value of isChecked and set its initial value to true, meaning that the checkbox is not checked initially.

Now that we are checking the `checked` property for our checkbox, as opposed to the `value` property for all other inputs, hence we need to modify our `handleChange()` function to deal with these changes.
Instead of saying `event.target.name` or `event.target.value`, we can initialize these names at the top relating to `event.target`. Thus, this line of code will address this:
`const {name, value, type, checked} = event.target`

#### Radio Buttons
For radio buttons, here we are tracking employment status, and we have three options:
- Unemployed
- Part-time
- Full-time

So, in our state, whenever we select one, we update the string value in the state. Our state will be `employment`.

To each one of our radio inputs, we need to add a name property, and we will set all of their names to be the same, like so: `name: "employment"`. Also, for each value, we will have `value="unemployed"`, `value="part-time"`, `value="full-time"` in each of our radio buttons accordingly.

Much like the same options before, we will use our same `handleChange()` function to listen to the changes happening to these radio buttons.

For radio buttons to be **controlled components**, we cannot use value in the same way that we have using it for other inputs, and also, we cannot use checked in the same way, because checked uses booleans. Instead, we use `checked={formData.employment === "unemployed"}`. What is happening in this code is that we are checking if the employment is unemployed, for the radio input of unemployed, and so on for the rest of them.

#### Select Boxes
For select boxes, the concept is very similar to other inputs, in the sense that we can make them controlled components using the value component. Can check the code to see how it is implemented.

### Submitting the Form
Now, after all of these inputs, we need to know how we can submit the form in React. The way this is done in HTML is that we have an input of type submit. However in React, we can just use `<button>`.
Any button inside `<form>` tags in React automatically has the type submit, and we need to specify its type if we want to change it.

Also, hitting the button will trigger the **onSubmit event handler**.
This is different than methods in HTML such as form method POST or GET, and action someFile.php. Now, this is done in React is using a `handleSubmit()` function, which will be passed through the onSubmit event handler.

Shown in code.

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
