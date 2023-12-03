const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user'); 
const router = express.Router();


router.post('/register', async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
 
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            // JWT removed, now just sending the user's details (minus the password)
            const userWithoutPassword = { ...user._doc };
            delete userWithoutPassword.password;
            res.json(userWithoutPassword);
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST: Logout a user
// For a simple REST API, logout functionality usually means the client will simply discard the stored token.
router.post('/logout', (req, res) => {
    // The client should discard the authentication token.
    res.json({ message: "User logged out" });
});

module.exports = router;
