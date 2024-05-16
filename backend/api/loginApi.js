const connectDB = require('../db/dbConnect');

async function LoginApi(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("signupdata");

        const { email, password } = req.body;
        const user = await collection.findOne({
            $or: [
                { email, password },
                { mobile: email, password }
            ]
        });
        if (!user) {
            return res.status(244).json({ userData: null, message: 'Invalid email or password!' });
        }
        else {
            req.session.user = { session: user, isAuth: true };
            const userSession = req.session.user;
            return res.status(200).json({ userData: userSession, success: true, message: 'Login Successfully!' });
        }
    } catch (error) {
        console.log("Login api error: ", error);
    }
}

module.exports = { LoginApi };