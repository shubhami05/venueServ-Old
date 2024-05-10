const connectDB = require('../db/dbConnect');
const { ObjectId } = require("mongodb");

async function ShowOwnerVenues(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('venuedata');
        const { userId } = await req.body;

        const venues = await collection.find({ userId: ObjectId.createFromHexString(userId) }).toArray();
        if (venues.length == 0) {
            return res.status(400).json({ message: "No any venues founded!", venueData: null });
        }
        else {
            return res.status(200).json({ message: "Venues are :", venueData: venues });
        }

    }
    catch (error) {
        console.log("Error while  loading venues for owner : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ShowOwnerVenues }