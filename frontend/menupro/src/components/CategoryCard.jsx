import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {
  const navigate = useNavigate();

  const navigation = (select_cat) => {
    navigate(`/${select_cat}`);
  };

  return (
    <>
      <div className="w-full h-auto flex justify-center items-start m-0">
        <div
          onClick={()=>navigation(props.category)}
          className="w-[360px] h-[50px] mt-[25px] bg-[#D9D9D9] rounded-[5px] flex justify-start items-center inset-y-0 left-0"
        >
          <p className="mx-[5px] font-bold bg-transparent text-[20px]">#</p>
          <h1 className="bg-transparent mx-[30px] font-bold">
            {props.category}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
