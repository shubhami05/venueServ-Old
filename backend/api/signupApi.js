const connectDB = require("../db/dbConnect");

async function SignupApi(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("signupdata");
        const { email, mobile, password, role } = req.body;
        const userExist = await collection.findOne({ email });
        const mobileExist = await collection.findOne({ mobile });
        if (userExist) {
            return res.status(299).json({ message: 'User already exist!' });
        }

        if (mobileExist) {
            return res.status(298).json({message:'Mobile already exist!'});
        }

        await collection.insertOne({
            email,
            mobile,
            password,
            role
        });
        return res.status(200).json({ message: 'Signup successfully!' });
    } catch (err) {
        return res.status(500).json("Signup adding error!  ", { message: err.message });
    }
}

module.exports = { SignupApi }; //index.js ma backend ma