import React from "react";

export default async function SingleProduct({ params }) {
  const { id } = await params;

  // fetch single product data
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const product = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-2">📧 {product.email}</p>
        <p className="text-gray-600 mb-2">📞 {product.phone}</p>
        <p className="text-blue-600 underline mb-2">{product.website}</p>
        <p className="text-gray-700">
          {product.address.city}, {product.address.street}
        </p>
      </div>
    </div>
  );
}
