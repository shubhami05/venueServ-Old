const { ObjectId } = require("mongodb")
const connectDB = require('../db/dbConnect')


async function ReviewSendApi(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("reviewData");
        const { userId, venueId, rating, review,date } = req.body;
        const email = req.session.user.session.email;


        await collection.insertOne({
            userId: ObjectId.createFromHexString(userId),
            venueId: ObjectId.createFromHexString(venueId),
            email,
            rating,
            review,
            date
        })

        return res.status(200).json({ message: "Details sent successfully" });
    }
    catch (error) {

        console.log(error)
        return res.status(500).json("Booking api error:", { message: error.message });
    }
}

module.exports = { ReviewSendApi }