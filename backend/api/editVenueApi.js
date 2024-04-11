const { ObjectId } = require("mongodb")
const connectDB = require('../db/dbConnect')

async function EditVenue(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("venuedata");
        const { vId, name, type, city, address, price, foodFacility, outsideFood, carParking, peopleCapacity, halls, rooms, ownerName, email, mobile } =  req.body;
        const photos = req.file;

        await collection.updateOne(
            {
                _id: ObjectId.createFromHexString(vId)
            },
            {
                $set: {
                    name: name,
                    type: type,
                    city: city,
                    address: address,
                    photos: photos,
                    price: price,
                    foodFacility: foodFacility,
                    outsideFood: outsideFood,
                    carParking: carParking,
                    peopleCapacity: peopleCapacity,
                    halls: halls,
                    rooms: rooms,
                    ownerName: ownerName,
                    email: email,
                    mobile: mobile
                }
            }
        );
        res.status(200).json({ message: "Venue Updated Successfully!" });
    } catch (error) {
        console.log("Edit Venue Api Error:", error);
        res.status(500).json({ message: error.message });
    }
}
module.exports = { EditVenue }