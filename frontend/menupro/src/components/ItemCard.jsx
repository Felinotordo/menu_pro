import React, { useContext } from "react";
import { ItemsContext } from "../context/context";

const ItemCard = (props) => {
  const context = useContext(ItemsContext);

  const addItem = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price
    };
    context.addItem(item);
  };


  const formatCurrency = (amount, currency = 'ARS') => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <>
      <div className="w-full h-auto flex justify-center items-start m-0">
        <div className="cursor-pointer w-[360px] h-[120px] mt-[25px] bg-[#D9D9D9] rounded-[5px] flex justify-start items-center inset-y-0 left-0">
          <div className="flex flex-col mx-[10px] w-full">
            <div className="flex flex-col mb-[10px]">
              <p className="font-bold text-[15px]">{props.name}</p>
              <p>{props.description}</p>
            </div>
            <div className="flex items-center justify-end">
              <p className="font-bold text-[15px]">{formatCurrency(props.price)}</p>
              <button onClick={()=>addItem()} className="ml-[5px] bg-red-700 text-white rounded-full flex items-center justify-center" style={{ width: '30px', height: '30px' }}>
                <span className="text-[20px] translate-y-[-3px]">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;


