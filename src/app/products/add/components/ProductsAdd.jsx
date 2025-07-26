"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const dynamic = "force-dynamic";

const ProductsAdd = () => {
  const [productName, setProductName] = useState("");
  const navigate = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;

    const payload = { productName };
    const res = await fetch("https://nextjs-phi-henna-lfv4snidt7.vercel.app/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    setProductName("");
    navigate.push("/products")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter product name"
        className="border px-3 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductsAdd;
