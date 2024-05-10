const express = require("express");
const connectDB = require("./db/dbConnect")
const cors = require("cors");
const session = require("express-session");

const SessionApi = require("./api/sessionApi");
const { SignupApi } = require("./api/signupApi");
const { LoginApi } = require("./api/loginApi");
const { LogoutApi } = require("./api/LogoutApi");
const { showUsersApi } = require("./api/showUsers");
const { venuePicUpload } = require("./multer/multerUpload");
const { venueApi } = require("./api/venueApi");
const { showVenuesApi } = require("./api/showVenues");
const { ShowOwnerVenues } = require("./api/ownerVenues");
const { CategoryVenues } = require("./api/CategoryVenuesApi");
const { EditVenue } = require("./api/editVenueApi");
const { DeleteVenue } = require("./api/deleteVenueApi");
const {  BookingSendApi } = require("./api/bookingApi");
const { ShowBookings } = require("./api/bookingShowApi");
const { DeleteBooking } = require("./api/bookingDelete");
const { UpdateBookingStatus } = require("./api/boookingStatusApi");
const { ShowUserBookings } = require("./api/bookingShowUserApi");

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
app.post("/logout",LogoutApi);
app.post("/showUsers", showUsersApi); //for admin

app.post('/addNewVenue', venuePicUpload.single('photos'), venueApi); //for owners
app.post('/myvenues', showVenuesApi); //for admin
app.post('/showMyVenues', ShowOwnerVenues); //for owners
app.post('/showCategoryVenues',CategoryVenues); //for user/finders
app.post("/deleteVenue", DeleteVenue); //for admin / owner
app.post("/editVenue", venuePicUpload.single('photos'),EditVenue); //for owners


app.post("/bookingSend",BookingSendApi) //for finders
app.post("/showBookings",ShowBookings) //for Owners
app.post("/deleteBooking",DeleteBooking) // for Owners
app.post("/updateBookingStatus",UpdateBookingStatus) //for owners
app.post("/showUserBookings",ShowUserBookings) // for finders



app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
});
