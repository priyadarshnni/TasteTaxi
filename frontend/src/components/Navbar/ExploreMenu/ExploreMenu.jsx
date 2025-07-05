import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log("menu_list >>>> ", menu_list);

 const handleMenuClick = (menuName) => {
   setCategory(menuName);

   // Scroll to food section after short delay
   setTimeout(() => {
     const section = document.querySelector(".food-display");
     if (section) {
       section.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   }, 100);
 };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise to satisfy
        your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => handleMenuClick(item.menu_name)} // Call handleMenuClick
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
