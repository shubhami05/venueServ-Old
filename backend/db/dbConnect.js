const {MongoClient} = require("mongodb");
const url = "mongodb+srv://Cluster0:ism234905@cluster0.yziyphn.mongodb.net/";
const client = new MongoClient(url);

async function connectToMongodb(){
    try{
        await client.connect();
        console.log("Connected to Database");
        const database = client.db("venueserv");
        return database;
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports = connectToMongodb;