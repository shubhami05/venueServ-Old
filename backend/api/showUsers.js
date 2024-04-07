const connectDB = require('../db/dbConnect');

async function showUsersApi(req, res) {
    try {
        const db = await connectDB();
        const collection =  db.collection("signupdata");
        const Users = await collection.find({}).toArray();
        const Owners = await collection.find({ role: "owner" }).toArray();
        const Finders = await collection.find({ role: "finder" }).toArray();

        if (!Users) {
            return res.status(400).json({ message: 'No any User found!' });
        }
        else {
            return res.status(200).json({ UserData: Users, OwnersData: Owners, FindersData: Finders });
        }
    } catch (error) {
        console.log("Show users api error: ", {message:error.message});
    }
}

module.exports = {showUsersApi}