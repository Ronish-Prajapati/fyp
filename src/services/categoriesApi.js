// import axios from "axios";

// export const BASE_URL = "/adminuser/api/v1/categories";

// const myAxios = axios.create({
//     baseURL: BASE_URL,
// });

// // Helper function to get the auth token
// // Modify your getAuthHeader function to ensure exact formatting:
// const getAuthHeader = () => {
//     const token = localStorage.getItem("authToken");
//     // Add logging to see the actual token
//     console.log("Token being used:", token);
//     return token ? { Authorization: `Bearer ${token.trim()}` } : {};
// };

// // Update your createCategory function with better error logging:
// export const createCategory = async (categoryData) => {
//     try {
//         console.log("Headers being sent:", {
//             "Content-Type": "application/json",
//             ...getAuthHeader(),
//         });
        
//         const response = await myAxios.post("/", categoryData, {
//             headers: {
//                 "Content-Type": "application/json",
//                 ...getAuthHeader(),
//             },
//             // Add this to see if CORS is the issue
//             withCredentials: true,
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Full error object:", error);
//         console.error("Error status:", error.response?.status);
//         console.error("Error details:", error.response?.data);
//         throw error;
//     }
// };


import axios from "axios";

// Helper function to get the auth token
export const BASE_URL = "localhost:1010/";
const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");
  console.log("Token being used:", token); // Log the token for debugging
  return token ? { Authorization: `Bearer ${token.trim()}` } : {};
};

export const createCategory = async (categoryData) => {
  try {
    console.log("Headers being sent:", {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    });

    // Make sure to use the full URL with protocol
    const response = await axios.post("http://localhost:1010/adminuser/api/v1/categories", categoryData, {
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      // withCredentials: true, // Uncomment if you're using credentials with the backend
    });

    return response.data;
  } catch (error) {
    console.error("Full error object:", error);
    console.error("Error status:", error.response?.status);
    console.error("Error details:", error.response?.data);
    throw error;
  }
};
