import React, { useState } from "react";
import { createCategory } from "../services/categoriesApi";

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
            alert("Failed to create category");
        }
    };

    return (
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
    );
};

export default CreateCategoryForm;
