import React, { useEffect, useState } from "react";
import Carousels from "../../common/carousels/Carousels";
import MakeUsDiff from "./makeUsDiff";
import Featured from "./Featured";
import ProductCategory from "./ProductCategory";
import { toastError } from "../../common/toastError";
import { getHeroSectionLink } from "../../../@Endpoint/getCalls";
const Homepage = () => {
  const [heroSection, setHeroSection] = useState([]);
  useEffect(() => {
    getHeroSection();
  }, []);
  const getHeroSection = () => {
    getHeroSectionLink("Bearer ")
      .then(res => {
        setHeroSection(res.data.heroSectionList);
      })
      .catch(err => {
        toastError(err);
      });
  };
  return (
    <div>
      <div>
        <Carousels heroSection={heroSection} />
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
