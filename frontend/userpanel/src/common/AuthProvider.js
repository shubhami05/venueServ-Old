import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userLogined, setUserLogined] = useState(false);
    const navigate = useNavigate();

    const fetchSessionData = async () => {
        try {
            const response = await axios.post("http://localhost:8000/session");
            if (response.data.loggedIn) {
                setUserLogined(true);
            }
        } catch (error) {
            console.log("Error fetching session data: ", error);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await axios.post("http://localhost:8000/logout");
            if (response.status === 202) {
                alert("User logged out!");
                setUserLogined(false);
                navigate("/Login");
                
            }
        } catch (error) {
            console.log("Error logging out: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ userLogined, setUserLogined, fetchSessionData, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};