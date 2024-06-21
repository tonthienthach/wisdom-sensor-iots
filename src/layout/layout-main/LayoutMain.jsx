import React from "react";
import "./layout-main.css";
import Header from "../../components/user/Header/Header";
import Footer from "../../components/user/Footer/Footer";

const LayoutMain = ({children}) => {
  return (
    <div className="layout-main">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default LayoutMain;
