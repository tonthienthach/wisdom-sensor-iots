import React from "react";
import "./layout-main.css";

const LayoutMain = ({children}) => {
  return (
    <div className="layout-main">
      {children}
    </div>
  );
};

export default LayoutMain;
