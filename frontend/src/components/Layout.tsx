import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FooterPayment from "./FooterPayment";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterPayment />
    </>
  );
};
export default Layout;
