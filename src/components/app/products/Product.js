import React, { useState } from "react";
import Category from "../../common/category/Category";
import InputBar from "../../common/InputBar";
import ProductCard from "./ProductCard";
const Product = () => {
  const [search, setSearch] = useState(0);
  return (
    <div>
      <Category />
      <InputBar setSearch={setSearch} />
      <ProductCard search={search} />
    </div>
  );
};

export default Product;
