const { ObjectId } = require('mongodb');
const connectDB = require('../db/dbConnect');

async function ContactDeleteApi(req,res){
    try {
        const db = await connectDB();
        const collection = db.collection("contactData");
        const {id} = req.body;
        console.log(id)
        
        const result = await collection.deleteOne({_id:ObjectId.createFromHexString(id)});

        if(result.deletedCount == 0)
        {
            return res.status(400).json({message:'Contact not Found'});
        }
        else
        {
            return res.status(200).json({message:'Contact deleted successfully'});
        }
    } 
    catch (error) {
        res.status(500).json("Backend delete Contact error:",{message:error.message});
    }
}

module.exports = {ContactDeleteApi}