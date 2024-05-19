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

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/submit-form", (req, res) => {
    console.log(req.body);
    res.send("successfully submitted");
});
app.get("/resourcedownload", (req, res) => {
    res.render("resourcedownload")
});

app.get("/:name", (req, res) => {
    res.render(req.params.name);
});

// Start the application on port 3000
app.listen(3000, () => {
    // Log a message to the console when the application starts
    console.log("The application is running on localhost:3000");
});