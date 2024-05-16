const { MongoClient } = require("mongodb");
require('dotenv-safe').config({
    path: './.env.local',
    example:'./.env.local.example'
});

const mongodbUri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(mongodbUri);


async function connectToMongodb() {
    try {
        await client.connect();
        console.log("Connected to Database");
        const database = client.db(dbName);
        return database;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = connectToMongodb;