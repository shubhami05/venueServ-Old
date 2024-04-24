async function LogoutApi(req, res) {
    try {
        const userData = req.session.user;

        if (!userData) {
            return res.status(401).json({ message: "User is not logined" });
        }
        else {
            req.session.destroy();
            return res.status(200).json({ message: "User Logout Successfully!" });
        }
    } catch (error) {
        console.log("Logout Api Error!");
        return res.status(500).json({message:"external error"});
    }
}

module.exports = { LogoutApi }