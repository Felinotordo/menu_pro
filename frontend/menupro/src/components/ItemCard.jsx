import React from "react";

const ItemCard = (props) => {

  const formatCurrency = (amount, currency = 'ARS') => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <>
      <div className="w-full h-auto flex justify-center items-start m-0">
        <div className="w-[360px] h-[120px] mt-[25px] bg-[#D9D9D9] rounded-[5px] flex justify-start items-center inset-y-0 left-0">
          <div className="flex flex-col mx-[10px] w-full">
            <div className="flex flex-col">
              <p className="font-bold text-[15px]">{props.name}</p>
              <p>{props.description}</p>
            </div>
            <div className="flex justify-end">
              <p className="font-bold text-[15px]">{formatCurrency(props.price)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
