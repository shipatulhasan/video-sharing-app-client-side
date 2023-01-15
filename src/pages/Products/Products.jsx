import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
      <div className="grid mb-8 lg:grid-cols-3 gap-8">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
