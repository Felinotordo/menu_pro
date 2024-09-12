import React from "react";
import MenuList from "../components/MenuList";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header children={<MenuList type="category" />} />
    </>
  );
};

export default Home;
