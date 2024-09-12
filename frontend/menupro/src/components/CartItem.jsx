import React, { useContext } from "react";
import { ItemsContext } from "../context/context";

const CartItem = () => {
  const { items, deleteItem } = useContext(ItemsContext);

  // Agrupar ítems por nombre y contar cantidades
  const groupedItems = items.reduce((acc, item) => {
    if (acc[item.name]) {
      acc[item.name].cantidad += 1;
    } else {
      acc[item.name] = { ...item, cantidad: 1 };
    }
    return acc;
  }, {});

  // Convertir el objeto agrupado en un array para mapear
  const orderItems = Object.values(groupedItems);

  const deleteButton = (item) => {
    deleteItem(item);
  };

  return (
    <>
      <ul className="flex justify-center items-center flex-col mt-[25px]">
        {orderItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-2 border-b w-[350px]"
          >
            <div className="mr-auto">
              <p className="font-bold">{item.name}</p>
              <p className="text-sm">Cantidad: {item.cantidad}</p>
            </div>

            <p className="mr-[25px]">
              {item.cantidad}*{item.price} = {item.price * item.cantidad}
            </p>
            <button
              onClick={() => deleteButton(item)}
              className="text-white rounded-[10px] bg-red-600 px-[10px] py-[2px]"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center w-full h-auto my-[20px]">
        <p className="text-white bg-green-500 text-[15px] px-[20px] rounded-[10px] py-[5px]">Comprar</p>
      </div>
    </>
  );
};

export default CartItem;
