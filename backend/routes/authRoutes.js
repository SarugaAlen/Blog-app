const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getCollection } = require('../db');
const router = express.Router();




router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please provide all required data' });
    }

    try {
        const userCollection = await getCollection('users');
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            email,
            password: hashedPassword
        };

        await userCollection.insertOne(newUser);

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
        return res.status(400).json({ msg: 'Please provide email and password' });
    }

    try {
        const userCollection = await getCollection('users');
        const user = await userCollection.findOne({
            $or: [
                { username: usernameOrEmail },
                { email: usernameOrEmail }
            ]
        });

        if (!user) {
            return res.status(401).json({ msg: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });


        res.json({ token, username: user.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
