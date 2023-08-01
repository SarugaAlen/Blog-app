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

app.post('/objava', async (req, res) => {
    console.log(req.body) //you will get your data in this as object.
    const { naziv, opis} = req.body;
    if(!naziv || !opis){
        return res.status(400).json({msg: 'Prosim vključite naziv in opis'})
    }

    try {
        const postCollection = await getCollection('posts');

        await postCollection.insertOne({naziv, opis});

        return res.status(201).json({msg: 'Objava je bila uspešno dodana'});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Nekaj je šlo narobe'});
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))