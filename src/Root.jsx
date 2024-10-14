import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MainNav from "./components/MainNav";

function Root() {
  return (
    <>
      <Header />
      <MainNav />
      <Outlet />
    </>
  );
}

export default Root;
