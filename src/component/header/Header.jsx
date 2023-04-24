import React from "react";
import reactLogo from "../../assets/react.svg";
import "../header/Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={reactLogo} alt="" style={{ width: "300px" }} />
    </div>
  );
};

export default Header;
