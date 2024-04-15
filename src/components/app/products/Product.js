import React, { useState, useContext } from "react";
import Category from "../../common/category/Category";
import InputBar from "../../common/InputBar";
import ProductCard from "./ProductCard";
import Flex from "../../common/Flex";
import { useParams } from "react-router-dom";
import { Store } from "../../../@store/Store";

const Product = () => {
  const [search, setSearch] = useState("");
  const { category } = useParams();
  const { state } = useContext(Store);

  return (
    <div>
      <Flex justifyContent={"center"} className={"mt-2"}>
        <InputBar setSearch={setSearch} />
      </Flex>
      <Category categoryList={state.categoryList} />
      <ProductCard
        search={search}
        params={category}
        productList={state.productList}
      />
    </div>
  );
};

export default Product;
