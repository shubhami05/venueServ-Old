const { ObjectId } = require('mongodb');
const connectDB = require('../db/dbConnect');

async function DeleteVenue(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection("venuedata");
        const {vId} = req.body;
        console.log(vId)
        
        const result = await collection.deleteOne({_id:ObjectId.createFromHexString(vId)});

        if(result.deletedCount == 0)
        {
            return res.status(400).json({message:'Venue not Found'});
        }
        else
        {
            return res.status(200).json({message:'Venue deleted successfully'});
        }
    } 
    catch (error) {
        res.status(500).json("Backend delete venue error:",{message:error.message});
    }
}

module.exports = {DeleteVenue}