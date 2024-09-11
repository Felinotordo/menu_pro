import React from "react";
import CategoryCard from "./CategoryCard";
import { useFetch } from "../customHooks/useFetch";
import ItemCard from "./ItemCard";

const MenuList = (props) => {
  const items = useFetch(`${process.env.REACT_APP_URL_BACKEND}/category/`);

  return (
    <>
      <div className="w-full flex flex-col items-center">
        {props.type === "category"
          ? items.map((item) => (
              <CategoryCard
                key={item.id}
                id={item.id}
                category={item.category}
              />
            ))
          : items.map((item) => (
              <ItemCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
      </div>
    </>
  );
};

export default MenuList;
