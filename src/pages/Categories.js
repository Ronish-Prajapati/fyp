// import React, { useState } from "react";
// import { createCategory } from "../services/categoriesApi";
// import Base from "../components/Base";

// const CreateCategoryForm = () => {
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await createCategory({ name, description });
//             console.log("Category created:", response);
//             alert("Category created successfully!");
//         } catch (error) {
//             alert("Failed to create category");
//         }
//     };

//     return (
//         <Base>
//         <div className=" container mt-5">
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Category Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Category Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//             />
//             <button type="submit">Create Category</button>
//         </form>
//         </div>

        
//         </Base>
//     );
// };

// export default CreateCategoryForm;


import React, { useState } from "react";
import { createCategory } from "../services/categoriesApi";
import Base from "../components/Base";

const CreateCategoryForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createCategory({ name, description });
            console.log("Category created:", response);
            alert("Category created successfully!");
        } catch (error) {
            console.error("Error creating category:", error);
            alert("Failed to create category");
        }
    };

    return (
        <Base>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Create Category</button>
            </form>
        </Base>
    );
};

export default CreateCategoryForm;
