const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const { connectToDatabase, getCollection } = require('./db.js');
const authRoutes = require('./routes/authRoutes');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

connectToDatabase()
    .then(() => {

        app.use('/auth', authRoutes)

        app.listen(PORT, () => console.log(`Server je na portu: ${PORT}`));

        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded());
        app.use(bodyParser.urlencoded({ extended: true }));
    }).catch(error => {
        console.error('Serverja ni bilo možno zagnat:', error);
    });

app.post('/blogPost', async (req, res) => {
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

app.get('/posts', async (req, res) => {
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

app.get('/blogPost/:id', async (req, res) => {
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



