import React from "react";
import "./LayoutEmployee.css";
import Header from "../../pages/employee/header/header";
import Footer from "../../pages/employee/footer_setting/footer_setting";

const LayoutEmployee = ({children}) => {
  return (
    <div className="layout-main">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default LayoutEmployee;