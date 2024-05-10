const { ObjectId } = require('mongodb');
const connectDB = require('../db/dbConnect');

async function DeleteBooking(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection("bookingData");
        const {bId} = req.body;
        
        const result = await collection.deleteOne({_id:ObjectId.createFromHexString(bId)});

        if(result.deletedCount == 0)
        {
            return res.status(400).json({message:'Bookings not Found'});
        }
        else
        {
            return res.status(200).json({message:'Booking deleted successfully'});
        }
    } 
    catch (error) {
        res.status(500).json("Backend delete booking error:",{message:error.message});
    }
}

module.exports = {DeleteBooking}