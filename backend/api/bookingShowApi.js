const connectDB = require('../db/dbConnect');
const { ObjectId } = require("mongodb");

async function ShowBookings(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('bookingData');
        const { ownerId } = await req.body;

        const bookings = await collection.find({ ownerId: ObjectId.createFromHexString(ownerId) }).toArray();
        if (bookings.length == 0) {
            return res.status(401).json({ message: "No any booking founded!", bookingData: null });
        }
        else {
            return res.status(200).json({ message: "Your bookings are :", bookingData: bookings });
        }

    }
    catch (error) {
        console.log("Error while  loading booking for owner : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ShowBookings }