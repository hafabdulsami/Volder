import React from "react";

import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Homepage from "../components/app/homePage/Homepage";
const Layouts = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layouts;
