import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ children }) => {
  const navigate = useNavigate();
  const navi = () => {
    navigate(`/`);
  };
  const cart=()=>{
    navigate('/cart')
  }
  return (
    <div className="m-0 p-0 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#4CAF50] w-full h-[50px] flex items-center">
        <h1
          onClick={() => navi()}
          className="text-[20px] font-bold text-white m-[15px] bg-transparent cursor-pointer"
        >
          MenuPro
        </h1>
        <div onClick={()=>cart()} className="flex justify-end w-full cursor-pointer">
            <p className="mx-[10px] text-[20px]">&#128722;</p>
        </div>
      </div>

      {/* MenuList */}
      <div className="flex-grow">{children}</div>

      {/* Footer */}
      <footer className="bg-[#4CAF50] w-full h-[50px] flex items-center justify-center mt-[25px]">
        <p className="text-white">© 2024 MenuPro</p>
      </footer>
    </div>
  );
};

export default Header;

