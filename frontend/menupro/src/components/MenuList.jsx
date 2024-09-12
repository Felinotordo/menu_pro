import React from "react";
import CategoryCard from "./CategoryCard";
import { useFetch } from "../customHooks/useFetch";
import ItemCard from "./ItemCard";
import { useParams} from "react-router-dom";

const MenuList = (props) => {
  const { category } = useParams();
  const categoryValue = category || " "; // Si 'category' es undefined, será " "

  const items = useFetch(
    `${process.env.REACT_APP_URL_BACKEND}/category/${categoryValue}`
  );

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
