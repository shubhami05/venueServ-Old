const { ObjectId } = require("mongodb")
const connectDB = require('../db/dbConnect')


async function BookingSendApi(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection("bookingData");
        const {ownerId,venueId,venueName,eventType,date,eventSession,foodType,numberOfGuests,fullname,contact} =req.body;
        const userId = req.session.user.session._id;
        const userEmail = req.session.user.session.email;

        console.log("ownerid:",ownerId);
        console.log("venueid:",venueId);
        
 
        await collection.insertOne({
            userId :ObjectId.createFromHexString(userId),
            userName : fullname,
            userContact : contact,
            userEmail,
            venueName,
            venueId :ObjectId.createFromHexString(venueId),
            ownerId : ObjectId.createFromHexString(ownerId),
            eventType,
            eventSession,
            date,
            foodType,
            numberOfGuests,
            status:false
        })

        return res.status(200).json({message:"Details sent successfully"});
    } 
    catch (error) {

        console.log(error)
        return res.status(500).json("Booking api error:",{message:error.message});
    }
}

module.exports = {BookingSendApi}