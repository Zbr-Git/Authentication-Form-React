import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h2>This is footer</h2>
    </>
  );
};

export default Layout;
