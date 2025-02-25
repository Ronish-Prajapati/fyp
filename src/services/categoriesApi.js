import axios from "axios";

export const BASE_URL = "http://localhost:1010/adminuser/api/v1/categories";

const myAxios = axios.create({
    baseURL: BASE_URL,
});

// Helper function to get the auth token
const getAuthHeader = () => {
    const token = localStorage.getItem("authToken")?.trim();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Create a new category (includes name and description)
export const createCategory = async (categoryData) => {
    try {
        const response = await myAxios.post("/", categoryData, {
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader(),
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating category:", error.response?.data || error.message);
        throw error;
    }
};
