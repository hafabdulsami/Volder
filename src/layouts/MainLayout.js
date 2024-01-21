import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
const MainLayout = () => {
  // const isChat = pathname.includes('chat');

  return (
    <div>
      <div className="content pb-0 m-3">
        <NavBar />
        <Outlet />
        {/*------ Main Routes ------*/}
      </div>
      <div className="p-3" style={{ backgroundColor: "#F5F5F5" }}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
