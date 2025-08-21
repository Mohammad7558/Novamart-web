import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className=" px-5 py-5 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href='/'>
              <img className="w-34" src="/Logo.png" alt="" />
            </Link>
          </div>
          <div className="flex space-x-5">
            <Link href="/products">Products</Link>
            <Link href="/login">Login</Link>
            <Link href='/dashboard'>Dashboard</Link>
          </div>
        </div>
      </header>
    </div>
  );
}
