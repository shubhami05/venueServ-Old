const { ObjectId } = require("mongodb");
const connectDB = require("../db/dbConnect");

async function venueApi(req,res){
    try{
        const db = await connectDB();
        const collection = db.collection("venuedata");
        const {name,type,city,address,price,foodFacility,outsideFood,carParking,peopleCapacity,halls,rooms,ownerName,email,mobile} = req.body;
        // const photos = req.file;
        const photos = req.files.map(file => file.filename);
        const userId = req.session.user.session._id;
        console.log(userId);
        
        await collection.insertOne({
            userId: ObjectId.createFromHexString(userId),
            name,
            type,
            city,
            address,
            photos,
            price,
            foodFacility,
            outsideFood,
            carParking,
            peopleCapacity,
            halls,
            rooms,
            ownerName,
            email,
            mobile
        });
        return res.status(200).json({message:'Venue added successfully!'});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json("VenueApi error:",  {message:err.message});
    }
}
module.exports = {venueApi}