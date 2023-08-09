const express = require('express');
const { ObjectId } = require('mongodb');
const { getCollection } = require('../db');


const router = express.Router();
router.post('/', async (req, res) => {
    console.log(req.body)
    const { naziv, opis, date } = req.body;
    if (!naziv || !opis || !date) {
        return res.status(400).json({ msg: 'Prosim vključite naziv in opis' })
    }
    
    try {
        const postCollection = await getCollection('posts');

        await postCollection.insertOne({ naziv, opis, date, author: 'admin' });

        return res.status(201).json({ msg: 'Objava je bila uspešno dodana' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe' });
    }
});

router.get('/', async (req, res) => {
    try {
        const postCollection = await getCollection('posts');

        const posts = await postCollection.find({}).toArray();

        return res.status(200).json({ posts });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postCollection = await getCollection('posts');

        const post = await postCollection.findOne({ _id: new ObjectId(req.params.id) });

        if (!post) {
            return res.status(404).json({ error: 'Objava s tem id-jem ne obstaja' });
        }

        return res.status(200).json({ post });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe' });
    }
});

module.exports = router;
