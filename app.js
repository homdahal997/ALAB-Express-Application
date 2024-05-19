const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.send("Welcome to my own first Express application")
});

app.listen(3000);