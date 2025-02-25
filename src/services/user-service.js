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
        const response = await myAxios.post("/auth/login", credentials);

        const { token } = response.data; // Assuming response contains { token: "your_jwt_token" }

        if (token) {
            localStorage.setItem("authToken", token); // Store token in localStorage
        }

        return response.data;
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error;
    }
};

// Logout function
export const logout = () => {
    localStorage.removeItem("authToken"); // Remove token on logout
};