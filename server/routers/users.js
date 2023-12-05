const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); 
const router = express.Router();


router.get('/users', async (req, res) => {
    try {
        const users = await User.find(); 
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);


        let existingUser = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already in use' });
        }

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const newUser = await user.save();

        const userWithoutPassword = { ...newUser._doc };
        delete userWithoutPassword.password;
        res.status(201).json({ user: userWithoutPassword, message: 'Registration is successful' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering new user', error: err });
    }
});


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user && await bcrypt.compare(req.body.password, user.password)) {

            const userForSession = {
                id: user._id,
                email: user.email
            };
            res.json({ user: userForSession, message: 'Login successful' });
        } else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err });
    }
});

router.post('/logout', (req, res) => {
   
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;

