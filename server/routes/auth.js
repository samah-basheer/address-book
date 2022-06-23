const router = require("express").Router();
const User = require("../models/User");

router.post("/login");

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check all missing fields
        if (!name || !email || !password) {
            return res.status(400).json({
                error: `Please enter all the required fields.`
            });
        }

        // name validation 
        if (name.length > 25) {
            return res.status(400).json({
                error: `Name can only be less than 25 characters.`
            });
        }

        // email validation 
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailReg.test(email)) {
            return res.status(400).json({
                error: `Please enter a valid email address.`
            });
        }

        // password validation
        if (password.length <= 6) {
            return res.status(400).json({
                error: `Password must be at least 6 characters long.`
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;