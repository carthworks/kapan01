import React from "react";
// import MenuLinks from "../components/MenuLinks"; // Your navigation component
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
