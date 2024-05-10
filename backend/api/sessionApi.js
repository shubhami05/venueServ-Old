async function SessionApi(req, res) {
    try {
        const userData = req.session.user;

        if (!userData) {
            return res.status(499).json({ message: "No session created!" });
        }
        else {
            return res.status(200).json({
                sessionData: userData, success: true, message: "Got successful"
            })
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
module.exports = SessionApi;