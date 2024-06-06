const connectDB = require('../db/dbConnect');

async function ContactShowApi(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('contactData');

        const contact = await collection.find({}).toArray();
        if (contact.length == 0) {
            return res.status(401).json({ message: "No any contact founded!", contactData: null });
        }
        else {
            return res.status(200).json({ message: "All contacts are :", contactData: contact });
        }
    }
    catch (error) {
        console.log("Error while  loading contacts : ", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ContactShowApi }