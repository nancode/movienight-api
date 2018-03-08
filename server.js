const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Welcome to Movie Night!");
});

app.listen(3000, function() {
    console.log("Server Listening on localhost:3000");
});
