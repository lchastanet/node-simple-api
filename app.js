const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const stuffRoutes = require("./routes/stuff")

const app = express()

mongoose
    .connect(
        "mongodb+srv://bob:s$wp.m.y!V4AHg8@cluster0.qhe2o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    )
    next()
})

app.use(express.json())

app.use("/api/stuff", stuffRoutes)

module.exports = app
