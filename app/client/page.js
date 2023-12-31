"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">{count}</h1>
      <button
        href="/client"
        className="capitalize btn btn-accent "
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
};
export default ClientPage;
