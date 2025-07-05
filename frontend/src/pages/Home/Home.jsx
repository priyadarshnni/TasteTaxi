import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Navbar/Header/Header";
import ExploreMenu from "../../components/Navbar/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Footer from "../../components/Footer/Footer";
import { Element } from "react-scroll";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      {/* ✅ Use Element for react-scroll */}
      <Element name="explore-menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </Element>

      <FoodDisplay category={category} />

      <Element name="mobile-app">
        <AppDownload />
      </Element>

      <Element name="contact-us">
       
      </Element>
    </div>
  );
};

export default Home;
