const connectDB = require('../db/dbConnect')


async function CategoryVenues(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('venuedata');
        const { category } = req.body;

        console.log("category:", category);
        const venues = await collection.find({ type: category }).toArray();



        // const venues = await collection.find({ userId: ObjectId.createFromHexString(userId) }).toArray();
        if (venues.length == 0) {
            return res.status(201).json({ message: "No any venues founded!", venueData: null });
        }
        else {
            return res.status(200).json({ message: "Venues are :", venueData: venues });
        }

    }
    catch (error) {
        console.log("Error while  loading venues for finder : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { CategoryVenues }