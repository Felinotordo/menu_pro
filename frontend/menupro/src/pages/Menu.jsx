import React from "react";
import MenuList from "../components/MenuList";
import Header from "../components/Header";

const Menu = () => {
  return (
    <>
      <Header children={<MenuList type="item" />} />
    </>
  );
};

export default Menu;
