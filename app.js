const express = require('express'); //includes the express package
const app = express()
require('console-stamp')(console); //a extra console log package
const config = require("./db/config.json") //path to the config files which contains the infos for the output

//creates a route 
app.get('/api', function (req, res) {
    //conatins the function if you call the route
    res.json({
        MainPage: `${config.ApiExample.MainPage}`
    })
});

app.get('/api/example', function (req, res) {
    res.json({
        Name: `${config.example.Name}`,
        Firstname: `${config.example.Firstname}`,
        Age: `${config.example.Age}`
    })
});

//shows a "error" if you try to call a non existing route
app.use((req, res) => {
    res.status(404).send("This route is invalid");
});

//listens on the port
app.listen(3001, () => console.log("Server is Online!"));