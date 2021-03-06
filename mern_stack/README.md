# Learning about MERN Stack
This README file documents my notes as I am taking the following course on the MERN Stack from freeCodeCamp.org: https://www.youtube.com/watch?v=mrHNSanmqQ4&ab_channel=freeCodeCamp.org

### MERN stands for:
**M**: MongoDB
**E**: Express
**R**: React
**N**: Node.js

**Node.js** is the JavaScript run-time environment that executes JS code out of a
browser.
**Express**: A web appliation framework for Node.js (allows us to create servers).
**React**: Frontend Framework
**MongoDB**: Document-based open-source database. (Stores documents in BSON format, but they can be looked at as JSON objects)

##### Structure of our MERN Stack:

**Client** --> **R** <--> **EN** <--> **M**
**R**: Front end App built using React (localhost:3000)
**EN**: Express and Node.js are used to build the back end server(localhost:4000) (connects to R)
**M**: MongoDB Database (which connects to EN)

## MongoDB

### Difference between MongoDB and Relational Databases

| Relational  | MongoDB    |
|-------------|------------|
| Database    | Database   |
| Table       | Collection |
| Row         | Document   |
| Index       | Index      |
| Join        | $lookup    |
| Foreign Key | Reference  |

### Setting up a Cluster
Once we sign up for MongoDB Atlas, we have to set up a cluster, which will hold all
of our data. This cluster can contain various databases, and each database includes
collections, and each collection contains documents.

We set up our cluster and have created a database. We loaded the sample MongoDB dataset into our database, and from that dataset, we will use the `sample_restaurants`.

## Node.js and Express (Creating our Backend)
Let us go to the terminal, we check our version of node by `node -v`.
At the time of creating this project, the node version I had at the time of learning this course is `v14.17.3`.

Now, let us create a folder called `backend` in our current directory.

Inside our `backend` folder, we write:
`npm init -y` -- to create a package.json file.

Now we will start including our dependencies:
`npm install express cors mongodb dotenv`
Express: used for web server
CORS: Cross-origin resource sharing (allows us to skip the origin policy access resources from remote hosts)
MongoDB: Allows us to interact with our MongoDB database.
Dotenv: allows us to set environment variables in a file.

Now, install `npm install -g nodemon` -- helps restarting the server every time we update our files. -g allows us to install this globally.

After all of these packages were installed, now we modify our `package.json` file. Add `"type": "module"`, in order to use ES6 import statements in our code.

### Creating Backend
Created file called `server.js` in our backend directory. We import express, cors from their respective libraries. We also import restaurants, which will be imported from the api directory, where there will be a routes file.
Now let us create our Express app.

This can be simply done using this line of code:
`const app = express()`

After that, we will define that our app will use CORS, and it will be able to read JSON files as part of GET or POST requests.
```
app.use(cors())
app.use(express.json()) // This line is important because if our server receives GET or POST requests, it can convert it into JSON basically.
```
Now, we will define the route to our restaurants API, which is done like shown in the code snippet below. What the below code snippet means is that we define that our URL will be api/v1/restaurants, and our route is the restaurants file, which we have still not created at this point.
The line below it says that if any other URL is entered, we will redirect to a 404 error.
```
app.use('/api/v1/restaurants', restaurants)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))
```

Now what is left is we export our app as a module, and we do this using `export default app`

### Setting our Environment Variables
This file is important because in it we will store the URI of our database. So, we will create a `.env` file in our backend directory.
Now, we will go back to MongoDB Atlas, and then get the URI by connecting to our cluster, connect your application, and then copy the URI.

In our .env file, we specify the database URI, database name, and port (5000).

### Connecting to the Database and Start the Server
Create a file called `index.js`. In it, we import our app that we created in `server.js`, and we import mongodb and dotenv.
Now we have access to our .env file that we created earlier. We created an instance of `MongoClient`, and we connect to it.
In order to connect, we provide our database URI, which is stored in our environment variables, accessed through `process.env.RESTREVIEWS_DB_URI`, and then we provide a poolSize of 50, meaning that only 50 connections can be made at a time, and a timeout of 2500 ms. If there is any error, we catch it. Then we create an async function, and we start listening from our app. For now, we console log that we are listening on the port.

Now, everything seems ready to start our application, however, we still have to create our routes.

### Creating our Routes
We create the `restaurants.routes.js` file that we referenced before. In it, we include "Hello world". Since we specified that at the path `api/v1/restaurants`, it should refer to our routes file, then once we navigate to:
`localhost:5000/api/v1/restaurants`, then it will display "Hello world" just like we specified.
Any other URL will show error not found like we specified using the wildcard.

### Data Access
Now that we have established a connection to our database, we need to populate our application with data from it. Therefore, in the api directory, we create another directory called `dao`, and in it we create `restaurantsDAO.js`. In this file, we will create a variable called `restaurants` which will store the data.
Next, we will create async methods will be used to populate this variable with data. We check if restaurants is not null, then we return it, else we connect to our database and populate it.

After writing the `restaurantsDAO.js`, we go back to `index.js` and import our RestaurantsDAO class, and from it, we will inject the database and pass in the client.

### Defining our Restaurant Controller
In the api directory, we define a file called `restaurants.controller.js`. In
this file, we define a method called `apiGetRestaurants`. Here, we put
everything together where we use our RestaurantDAO class, and call a query from our database. Then define a response and return it as JSON. Now, if we navigate
to `api/v1/restaurants`, we will get the response from our database in JSON format.

It is recommended to use a tool like **Postman** or **Insomnia** to do GET requests, and in it, we can use our filters, for example, if we want to filter by the zipcode 10012 and get the second page of that, we can enter the following URL into our GET request.
`http://localhost:5000/api/v1/restaurants?zipcode=10012&page=2`

**Remember when we said that getting by name needs to be configured from MongoDB Atlas**, let us do that now.

Go to Atlas, our database (sample_restaurants), our collection (restaurants), and then there we will create an index. Once we click that, this is what we specify:
```
{
  "name": "text",
}
```
What this means is that our index will be the "name" field, and it is of type text, like we specified earlier in the code. Hit Review, then Confirm. Now, our index has been created. Let us test this search in Postman.

Now that we have created the GET request route, we want to create POST and DELETE request routes in our application, so that we can write to the database and even delete elements from it.

## Adding Post, Update, and Delete for Reviews
Going back to our `restaurants.route.js`, we created new routes for these
requests, and much like how GET requests were related to a Restaurant Controller and a RestaurantDAO, these requests will be related to their own
ReviewController and ReviewsDAO. In Review Controller, we define the API
methods for post, update, and delete, and in them we call the methods
defined in our DAO, which is the element which will directly communicate with
our database.

Now let us try a **POST** request in Postman.
Choose POST, and in the URL, since we defined the path to include "review" after "restaurant", so this is the URL to navigate to:
`http://localhost:5000/api/v1/restaurants/review`

Enter the following JSON:
```
{
    "restaurant_id": "5eb3d668b31de5d588f4292a",
    "text": "Great food!",
    "user_id": "1234",
    "name": "Ayed"
}
```

It should be successful, and now if we check MongoDB Atlas, we should find a
new reviews collection, and find our entry in it.

