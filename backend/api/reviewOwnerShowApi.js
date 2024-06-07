const { ObjectId } = require('mongodb');
const connectDB = require('../db/dbConnect');

async function ShowReviewsOwnerApi(req, res) {
    try {
        const db = await connectDB();
        const venueCollection = db.collection('venuedata');
        const reviewCollection = db.collection('reviewData');
        const ownerId = req.session.user.session._id; // Assuming this is a valid ObjectId string

        // Step 1: Fetch all venue IDs owned by the logged-in user
        const venues = await venueCollection.find({ userId: ObjectId.createFromHexString(ownerId) }).toArray();
        const venueIds = venues.map(venue => venue._id);

        // Step 2: Fetch all reviews for these venue IDs
        const reviews = await venueCollection.aggregate([
            {
                $match: {
                    userId: ObjectId.createFromHexString(ownerId)
                }
            },
            {
                $lookup: {
                    from: 'reviewData',
                    localField: '_id',
                    foreignField: 'venueId',
                    as: 'reviews'
                }
            },
            {
                $unwind: '$reviews'
            },
            {
                $project: {
                    _id: '$reviews._id',
                    venueName: '$name',
                    rating: '$reviews.rating',
                    review: '$reviews.review',
                    date: '$reviews.date',
                    email: '$reviews.email',
                    userId: '$reviews.userId'
                }
            }
        ]).toArray();
        if (reviews.length === 0) {
            return res.status(401).json({ message: "No reviews found!", reviewData: null });
        } else {
            return res.status(200).json({ message: "All reviews are:", reviewData: reviews });
        }
    }
    catch (error) {
        console.log("Error while  loading reviews : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ShowReviewsOwnerApi }