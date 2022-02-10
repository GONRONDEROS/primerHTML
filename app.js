const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public") ;
app.use(express.static(publicPath));

app.listen(5000, () => {
    console.log("Servidor funcionando correctamente en 3000");
});

app.get("/home", (req, res) => {
    const fileToSend = path.join(__dirname, "views/home.html");
    res.sendFile(fileToSend);
});




