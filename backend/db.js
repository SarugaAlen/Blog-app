const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

let dbClient;

const connectToDatabase = async () => {
    try {
        dbClient = await MongoClient.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

const getCollection = async (collectionName) => {
    if (!dbClient) {
        throw new Error('Database connection not established');
    }
    const db = dbClient.db(dbName);
    return db.collection(collectionName);
};

module.exports = {
    connectToDatabase,
    getCollection,
};
