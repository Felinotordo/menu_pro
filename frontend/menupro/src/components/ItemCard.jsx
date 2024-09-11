import React from "react";

const ItemCard = (props) => {
  return (
    <>
    <div className="w-full h-auto flex justify-center items-start m-0">
      <div className="w-[360px] h-[120px] mt-[25px] bg-[#D9D9D9] rounded-[5px] flex justify-start items-center inset-y-0 left-0">
        <div className="flex flex-col">
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default ItemCard;
