import React, { useContext } from "react";
import Carousels from "../../common/carousels/Carousels";
import MakeUsDiff from "./makeUsDiff";
import Featured from "./Featured";
import ProductCategory from "./ProductCategory";
import { Store } from "../../../@store/Store";

const Homepage = () => {
  const { state } = useContext(Store);
  return (
    <div>
      <div>
        <Carousels heroSection={state.heroSection} />
      </div>
      <div>
        <MakeUsDiff qualitiesList={state.qualitiesList} />
        <ProductCategory categoryList={state.categoryList} />
        <Featured featuredProducts={state.featuredProducts} />
      </div>
    </div>
  );
};

export default Homepage;
