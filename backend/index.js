const express = require("express");
const connectDB = require("./db/dbConnect")
const cors = require("cors");

const { venuePicUpload} = require("./multer/multerUpload");
const {venueApi} = require("./api/venueApi");
const {showVenuesApi} = require("./api/showVenues");
const { SignupApi } = require("./api/signupApi");

const app = express();
const PORT = 8000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:'*',
    credentials:true,
    methods:['GET','POST','PUT','DELETE'],
}));

app.post('/addNewVenue',venuePicUpload.single('photos'),venueApi);
app.post('/myvenues',showVenuesApi);
app.post("/signup",SignupApi);
app.post("/login",SignupApi);



app.listen(PORT,()=>{
    console.log("Server started on port: ",PORT);
});
