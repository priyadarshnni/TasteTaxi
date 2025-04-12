import React from "react";
import "./Header.css";
import { assets } from "../../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <img src={assets.header_img} alt="" />
      <div className="header-contents">
        <h2> Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise to satisfy
          your cravings <br></br>and elevate your dining experience, one
          delicious meal at a time.{" "}
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
