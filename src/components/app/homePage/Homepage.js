import React from "react";
import Carousels from "../../common/carousels/Carousels";
import MakeUsDiff from "./makeUsDiff";
import Featured from "./Featured";
import ProductCategory from "./ProductCategory";
const Homepage = () => {
  return (
    <div>
      <div>
        <Carousels />
      </div>
      <div>
        <MakeUsDiff />
        <ProductCategory />
        <Featured />
      </div>
    </div>
  );
};

export default Homepage;
