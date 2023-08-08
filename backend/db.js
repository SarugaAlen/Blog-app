const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb://localhost:27017'
const dbName = 'myDatabase'

let dbClient;

const connectToDatabase = async () => {
    try{
        dbClient = await MongoClient.connect(mongoURI);
        console.log('Povezan z podatkovno bazo');
    }
    catch(error){
        console.error('Neuspešno povezan z podatkovno bazo');
        console.error(error);
    }
};

const getCollection = async (collectionName) => {
    if(!dbClient){
        throw new Error('Povezava z podatkovno bazo ni bila vzpostavljena')
    }

    const db = dbClient.db(dbName);
    return db.collection(collectionName)
};

module.exports = {
    connectToDatabase,
    getCollection,
}