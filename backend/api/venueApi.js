const connectDB = require("../db/dbConnect");

async function venueApi(req,res){
    try{
        const db = await connectDB();
        const collection = db.collection("venuedata");
        const {name,type,city,address,price,foodFacility,outsideFood,carParking,peopleCapacity,halls,rooms,ownerName,email,mobile} = req.body;
        const photos = req.files;

        await collection.insertOne({
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
        return res.status(500).json({message:err.message});
    }
}
module.exports = {venueApi}