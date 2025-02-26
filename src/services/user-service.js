import React from 'react'
import { myAxios } from './helper'

export const signUp = (user) => {
    return myAxios.post("/auth/register", user) // Added user data
        .then((resp) => resp.data);
};
const getAuthHeader = () => {
    const token = localStorage.getItem("authToken")?.trim();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Login function
export const login = async (credentials) => {
    try {
        const response = await myAxios.post("auth/login", credentials);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Invalid email or password";
    }
};


// Logout function
export const logout = () => {
    localStorage.removeItem("authToken"); // Remove token on logout
};