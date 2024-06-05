const { ObjectId } = require("mongodb")
const connectDB = require('../db/dbConnect')


async function ReviewSendApi(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("reviewData");
        const { userId, venueId, rating, review } = req.body;



        await collection.insertOne({
            userId: ObjectId.createFromHexString(userId),
            venueId: ObjectId.createFromHexString(venueId),
            rating,
            review,
        }, { timestamps: true })

        return res.status(200).json({ message: "Details sent successfully" });
    }
    catch (error) {

        console.log(error)
        return res.status(500).json("Booking api error:", { message: error.message });
    }
}

module.exports = { ReviewSendApi }