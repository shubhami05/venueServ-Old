const { ObjectId } = require('mongodb');
const connectDB = require('../db/dbConnect');

async function ShowReviewsApi(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('reviewData');
        const { vId } = await req.body;

        const reviews = await collection.find({ venueId: ObjectId.createFromHexString(vId) }).toArray();
        if (reviews.length == 0) {
            return res.status(401).json({ message: "No any reviews founded!", reviewData: null });
        }
        else {
            return res.status(200).json({ message: "All reviews are :", reviewData: reviews });
        }
    }
    catch (error) {
        console.log("Error while  loading reviews : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ShowReviewsApi }