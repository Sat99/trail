const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("First Deployment, Atlast!!");
    })

const SERVER_PORT = process.env.PORT || 1234;
app.listen((SERVER_PORT));