import React, { useState } from "react";
import Category from "../../common/category/Category";
import InputBar from "../../common/InputBar";
import ProductCard from "./ProductCard";
import Flex from "../../common/Flex";
import { useParams } from "react-router-dom";
const Product = () => {
  const [search, setSearch] = useState("");
  const { category } = useParams();
  return (
    <div>
      <Flex justifyContent={"center"} className={"mt-2"}>
        <InputBar setSearch={setSearch} />
      </Flex>
      <Category />
      <ProductCard search={search} params={category} />
    </div>
  );
};

export default Product;
