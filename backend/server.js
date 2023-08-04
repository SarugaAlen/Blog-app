const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI = 'mongodb://localhost:27017'
const dbName = 'myDatabase'

const getCollection = async (collectionName) => {
    const client = await MongoClient.connect(mongoURI);
    const db = client.db(dbName);
    return db.collection(collectionName)
};

app.post('/blogPost', async (req, res) => {
    console.log(req.body) 
    const { naziv, opis, date} = req.body;
    if(!naziv || !opis || !date){
        return res.status(400).json({msg: 'Prosim vključite naziv in opis'})
    }

    try {
        const postCollection = await getCollection('posts');

        await postCollection.insertOne({naziv, opis, date, author: 'admin'});

        return res.status(201).json({msg: 'Objava je bila uspešno dodana'});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe'});
    }
});

app.get('/posts', async (req, res) => {
    try{
        const postCollection = await getCollection('posts');

        const posts = await postCollection.find({}).toArray();

        return res.status(200).json({posts});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe'});
    }
});


app.get('/blogPost/{id}', async (req, res) => {
    try{
        const postCollection = await getCollection('posts');

        const post = await postCollection.findOne({id: req.params.id});

        return res.status(200).json({post});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe'});
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))