const connectDB =require("../db/dbConnect");

async function showVenuesApi(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection('venuedata');
        const venues = await collection.find({}).toArray();
        
        if(venues.length == 0)
        {
            return res.status(400).json({message:"No any venues founded!",venueData:null});
        }
        else
        {
            return res.status(200).json({message:"Venues are here",venueData : venues});
        }
    } 
    catch (error) {
        console.log("Error while Venue loading : ",error);
        return res.status(500).json({message : error.message});
    }
}

module.exports = {showVenuesApi}