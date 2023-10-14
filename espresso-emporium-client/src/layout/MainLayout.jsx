import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
