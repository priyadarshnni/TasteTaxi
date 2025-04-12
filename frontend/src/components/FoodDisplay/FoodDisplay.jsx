import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category = "All" }) => {
  const { food_list } = useContext(StoreContext);

  // Debugging logs
  console.log("Food List:", food_list);
  console.log("Selected Category:", category);

  // Handle empty food list scenario
  if (!food_list || food_list.length === 0) {
    return <div className="no-food">No food items available.</div>;
  }

  // Filter the food list based on the selected category
  const filteredFoodList = food_list.filter((item) => {
    if (!item || !item.category) {
      console.error("Invalid food item:", item);
      return false;
    }
    return category === "All" || item.category === category;
  });

  // Handle case where no items match the selected category
  if (filteredFoodList.length === 0) {
    return (
      <div className="no-food">
        No items available in the "{category}" category.
      </div>
    );
  }

  return (
    <div className="food-display">
      <h2>{category === "All" ? "All Dishes" : `${category} Dishes`}</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item) => (
          <FoodItem
            key={item._id} // Use a unique identifier for key
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
