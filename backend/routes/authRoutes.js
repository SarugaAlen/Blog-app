const epress = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = epress.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try{
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ msg: 'Uporabnik s tem emailom že obstaja'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ msg: 'Uporabnik je bil uspešno registriran'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Nekaj je šlo narobe'});
    }
});

module.exports = router;
