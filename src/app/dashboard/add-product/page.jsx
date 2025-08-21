"use client";
import addProduct from "@/services/product";
import React, { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    features: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...formData,
        features: formData.features
          .split("\n")
          .map((f) => f.trim())
          .filter((f) => f.length > 0),
      };

      const newProduct = await addProduct(productData);
      console.log("Product added:", newProduct);
      alert("Product added successfully!");

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        features: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Enter product price"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Enter product category"
          />
        </div>
        <div>
          <label className="block mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Enter product image URL"
          />
        </div>
        <div>
          <label className="block mb-1">Product Features (one per line)</label>
          <textarea
            name="features"
            value={formData.features}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder={`e.g.\n- Lightweight design\n- Waterproof material\n- 2 year warranty`}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
