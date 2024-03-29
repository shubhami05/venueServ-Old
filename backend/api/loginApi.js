const connectDB = require('../db/dbConnect');

async function LoginApi(req,res){
    try {
        const db = await connectDB();
        const collection  = db.collection("signupdata");
        const {email,password} = req.body;
        const userExist = await collection.findOne({email,password});
        if(!userExist)
        {
            return res.status(400).json({message:'User not found!'});
        }
        else
        {
            return res.status(200).json({message:'Login Successfully!'});
        }
    } catch (error) {
        console.log("Login api error: ",error);
    }
}