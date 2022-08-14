import React, { useState } from "react";
// import { CartProvider } from "react-use-cart";
// import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  //   console.log(products);
  return (
    <>
      <div className="flex flex-wrap gap-4 mx-auto max-w-screen-xl text-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
