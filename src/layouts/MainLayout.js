import { React, useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import { toastError } from "../components/common/toastError";
import { getHeroSectionLink } from "../@Endpoint/getCalls";
import { Store } from "../@store/Store";
import { setHeroSection } from "../@store/Actions";
const MainLayout = () => {
  const { dispatch } = useContext(Store);
  const [loading, setloading] = useState([]);
  useEffect(() => {
    getloading();
  }, []);
  const getloading = () => {
    getHeroSectionLink("Bearer ")
      .then(res => {
        setHeroSection(res.data.loadingData, dispatch);
        setloading(false);
      })
      .catch(err => {
        toastError(err);
      });
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="content pb-0 m-3">
            <NavBar />
            <Outlet />
          </div>
          <div
            className="p-3"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
