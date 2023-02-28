import { Outlet } from "react-router";
import FooterPayment from "./FooterPayment";
import Navbar from "./Navbar";

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
