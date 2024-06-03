const { ObjectId } = require("mongodb");
const connectDB =require("../db/dbConnect");

async function fetchSingleVenueData(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection('venuedata');
        const {id} = await req.body;
        const venue = await collection.findOne({_id:ObjectId.createFromHexString(id)});
        
        if(venue.length == 0)
        {
            return res.status(400).json({message:"Venue is not founded!",venueData:null});
        }
        else
        {
            return res.status(200).json({message:"Venue is here:",venueData : venue});
        }
    } 
    catch (error) {
        console.log("Error while fetching single Venue  : ",error);
        return res.status(500).json({message : error.message});
    }
}

module.exports = {fetchSingleVenueData}