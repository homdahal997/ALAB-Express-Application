// Import the express module
const express = require("express");

//Create an instance of an express application
const app = express();

// Set 'pug' as the view engine for the application
app.set('view engine', 'pug');

/// Define a route handler for GET requests made to the root path ('/')
app.get("/", (req, res) =>{
    // Send the following view as response to the client
    res.render("index")
});

// Start the application on port 3000
app.listen(3000, () => {
    // Log a message to the console when the application starts
    console.log("The application is running on localhost:3000");
});