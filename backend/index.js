const express = require("express");
const connectDB = require("./db/dbConnect")
const cors = require("cors");
const session = require("express-session");

const { venuePicUpload } = require("./multer/multerUpload");
const { venueApi } = require("./api/venueApi");
const { showVenuesApi } = require("./api/showVenues");
const { SignupApi } = require("./api/signupApi");
const SessionApi = require("./api/sessionApi");
const { LoginApi } = require("./api/loginApi");
const { showUsersApi } = require("./api/showUsers");
const { DeleteVenue } = require("./api/deleteVenueApi");
const { ShowOwnerVenues } = require("./api/ownerVenues");

const app = express();
const PORT = 8000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000', 'http://localhost:5000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}))


app.post("/session", SessionApi);

app.post("/signup", SignupApi);
app.post("/login", LoginApi);
app.post("/showUsers", showUsersApi);

app.post('/addNewVenue', venuePicUpload.single('photos'), venueApi);
app.post('/myvenues', showVenuesApi); //for admin
app.post('/showMyVenues', ShowOwnerVenues); //for owners
app.post("/deleteVenue", DeleteVenue);


app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
});
