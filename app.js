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

// This middleware is used to parse URL-encoded bodies. 
// The "extended: true" option allows parsing of nested objects.
app.use(express.urlencoded({ extended: true }));

// This middleware serves static files from the 'public' directory.
app.use(express.static('public'));

// This route handler handles POST requests to "/submit-form".
// It logs the request body to the console and sends a response to the client.
app.post("/submit-form", (req, res) => {
    console.log(req.body);
    res.send("successfully submitted");
});

// This route handler handles GET requests to "/resourcedownload".
// It renders the 'resourcedownload' view and sends it as a response to the client.
app.get("/resourcedownload", (req, res) => {
    res.render("resourcedownload")
});

// This route handler handles GET requests to any route in the form "/:name".
// It renders a view with the same name as the route parameter and sends it as a response to the client.
app.get("/:name", (req, res) => {
    res.render(req.params.name);
});

// Start the application on port 3000
app.listen(3000, () => {
    // Log a message to the console when the application starts
    console.log("The application is running on localhost:3000");
});