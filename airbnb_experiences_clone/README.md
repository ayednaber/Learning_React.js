# Building an Airbnb Experiences Clone

This Airbnb experiences clone is made up of several components. Firstly, we have the navbar, which just contains the Airbnb logo placed on the left hand side. 

Also, we designed the hero section, which contains a photo grid, along with a title and paragraph under it.

Now, below the hero section, we will have card components, showing our different experiences.
For this one, at first, we did much like we have been learning in the previous few projects, where we are creating a Card component, and exporting it and placing it in the App.js file. However, in real life, anything that has a list of images and titles (for example, movies on IMDB, YouTube Videos on the homepage, etc..) will not be hard-coded, but is **data driven**.

Therefore, to achieve this, we will learn about the concept of **Props**.

To understand the concept of **props** better, let us think about an `<a>` field in HTML. It is meaningless without the `href`. The same goes for an `<img>`, it is useless without the `src`. Essentially, we need these details in order for these elements to make sense.
We can look at the same example using JavaScript, if we have a function such as the following:

`function addTwoNumbersTogether() { return 1 + 2 }`

This is a useless function, but if we have parameters in the function,
we will be able to give it a and b, and it will add the two numbers we gave as input, as opposed to this hard-coded sum which will be the same every time.

This is the same concept that we will be using for Props.

Another analogy:
See how in the photo of YouTube below, there is no way that a developer goes in and changes the HTML of the front page every time. But most porbably, there is a dynamic component such as VideoTile, which is designed to be flexible enough to take parameters for its thumbnail photo, name, channel name, view count, date, and more.

<img src="images/youtube-props-example.png">


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.