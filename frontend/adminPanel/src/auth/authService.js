import axios from "axios";
axios.defaults.withCredentials = true;

const fetchSessionData = async () =>{
    try{
        console.log("Logging.....");
        const response = await axios.post("http://localhost:8000/session");
        return true;
    }
    catch(error)
    {
        return false;
    }
};

export default fetchSessionData;