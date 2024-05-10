const { ObjectId } = require("mongodb")
const connectDB = require('../db/dbConnect')


async function UpdateBookingStatus(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection("bookingData");
        const {bId} =req.body;
 
        await collection.updateOne(
            {
                _id: ObjectId.createFromHexString(bId)
            },
            {
                $set: {
                  status:true
                }
            }
        );

        return res.status(200).json({message:"Status updated successfully"});
    } 
    catch (error) {

        console.log(error)
        return res.status(500).json("Booking status api error:",{message:error.message});
    }
}

module.exports = {UpdateBookingStatus}