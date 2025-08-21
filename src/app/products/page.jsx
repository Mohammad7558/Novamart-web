"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{product.email}</p>
          <p className="text-gray-500 text-sm">{product.phone}</p>
          <p className="mt-2 text-blue-600 underline">{product.website}</p>
          <p className="mt-2 text-gray-700">
            {product.address.city}, {product.address.street}
          </p>
          <Link href={`/products/${product.id}`}>View More</Link>
        </div>
      ))}
    </div>
  );
}
