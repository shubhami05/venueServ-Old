const connectDB = require('../db/dbConnect');

async function ShowAdminBookings(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('bookingData');

        const bookings = await collection.find({ }).toArray();
        if (bookings.length == 0) {
            return res.status(401).json({ message: "No any booking founded!", bookingData: null });
        }
        else {
            return res.status(200).json({ message: "All bookings are :", bookingData: bookings });
        }

    }
    catch (error) {
        console.log("Error while  loading booking for admin : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ShowAdminBookings }