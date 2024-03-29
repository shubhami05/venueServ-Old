const connectDB = require("../db/dbConnect");

async function SignupApi(req,res){
    try {
        const db =await connectDB();
        const collection = db.collection("signupdata");
        const {email,mobile,password,role} = req.body;
        const userExist = await collection.findOne({email});
        if(userExist)
        {
            return res.status(400).json({message:'User already exist!'});
        }

        await collection.insertOne({
            email,
            mobile,
            password,
            role
        });
        return res.status(200).json({message:'Signup successfully!'});
    } catch (err) {
        return res.status(500).json("Signup adding error!  ",{message:err.message});
    }
}

module.exports = {SignupApi}; //index.js ma backend ma