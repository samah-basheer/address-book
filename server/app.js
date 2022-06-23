const express = require('express');
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.get("/", (req, res) => {
    res.send("hello world");
})

// server configurations 
const PORT = process.env.PORT || 8000;

app.listen(PORT, async() => {
    try {
        await connectDB();
        console.log(`server listening on port: ${PORT}`);
    } catch(err) {
        console.log(err)
    }
});