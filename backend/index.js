const express = require("express");
const connectDB = require("./db/dbConnect");
const cors = require("cors");
const session = require("express-session");

const SessionApi = require("./api/sessionApi");
const { SignupApi } = require("./api/signupApi");
const { LoginApi } = require("./api/loginApi");
const { LogoutApi } = require("./api/LogoutApi");
const { showUsersApi } = require("./api/showUsers");
const { venuePicUpload } = require("./multer/multerUpload"); // Import multer middleware for handling file uploads
const { venueApi } = require("./api/venueApi");
const { showVenuesApi } = require("./api/showVenues");
const { ShowOwnerVenues } = require("./api/ownerVenues");
const { CategoryVenues } = require("./api/CategoryVenuesApi");
const { EditVenue } = require("./api/editVenueApi");
const { DeleteVenue } = require("./api/deleteVenueApi");
const { BookingSendApi } = require("./api/bookingApi");
const { ShowBookings } = require("./api/bookingShowApi");
const { DeleteBooking } = require("./api/bookingDelete");
const { UpdateBookingStatus } = require("./api/boookingStatusApi");
const { ShowUserBookings } = require("./api/bookingShowUserApi");
const { ContactSendApi } = require("./api/contactSendApi");
const { ShowAdminBookings } = require("./api/bookingShowAdmin");
const { fetchSingleVenueData } = require("./api/fetchSingleVenueData");
const { ReviewSendApi } = require("./api/reviewSendApi");
const { ShowReviewsApi } = require("./api/reviewShowApi");
const { ContactShowApi } = require("./api/contactShowApi");
const { ContactDeleteApi } = require("./api/contactDelete");
const { ShowReviewsOwnerApi } = require("./api/reviewOwnerShowApi");

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
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

app.post("/session", SessionApi);
app.post("/signup", SignupApi);
app.post("/login", LoginApi);
app.post("/logout", LogoutApi);
app.post("/showUsers", showUsersApi);

// Use venuePicUpload middleware for handling file uploads

app.post('/addNewVenue', venuePicUpload.array('photos', 10), venueApi);
// app.post('/addNewVenue', venuePicUpload.single('photos'), venueApi);
app.post('/myvenues', showVenuesApi);
app.post('/showMyVenues', ShowOwnerVenues);
app.post('/showCategoryVenues', CategoryVenues);
app.post("/deleteVenue", DeleteVenue);
app.post("/editVenue", venuePicUpload.single('photos'), EditVenue);

app.post("/bookingSend", BookingSendApi);
app.post("/showBookings", ShowBookings);
app.post("/deleteBooking", DeleteBooking);
app.post("/updateBookingStatus", UpdateBookingStatus);
app.post("/showUserBookings", ShowUserBookings);
app.post("/showAdminBookings", ShowAdminBookings);

app.post("/fetchSingleVenueData", fetchSingleVenueData);

app.post("/reviewSend", ReviewSendApi);
app.post("/showReview", ShowReviewsApi);
app.post("/showReviewOwner", ShowReviewsOwnerApi);

app.post("/contactSend", ContactSendApi);
app.post("/contactShow", ContactShowApi);
app.post("/contactDelete", ContactDeleteApi);

app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
});
