import React from "react";

import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Homepage from "../components/app/homePage/Homepage";
import Product from "../components/app/products/Product";
import path from "../routes/paths";
const Layouts = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path={path.product} element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layouts;
