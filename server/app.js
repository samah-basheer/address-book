const express = require('express')
const mongoose = require('mongoose')

const app = express()

// middlewares

// routes
app.get("/", (req, res) => {
    res.send("hello world")
})

// server configurations 
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    // connectDB();
    console.log(`server listening on port: ${PORT}`);
});