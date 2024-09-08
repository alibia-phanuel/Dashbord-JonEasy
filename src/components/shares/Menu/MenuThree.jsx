import { LuDiamond } from "react-icons/lu";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import SubMenuOne from "./SubMenuThree/SubMenuOne";
import SubMenuTwo from "./SubMenuThree/SubMenuTwo";

const MenuThree = ({ open, action }) => {
  const [open2, setopen2] = useState(false);
  return (
    <div>
      <li className={`relative  cursor-pointer ${open ? "left-3" : "left-0"}`}>
        <div
          onClick={() => {
            setopen2(!open2);
          }}
          className={`flex items-center justify-between    text-[#5F6273] hover:bg-slate-400 font-bold rounded-md w-full ${
            open2 && " text-[#5156C0]"
          }`}
        >
          <div className="flex items-center gap-4">
            <LuDiamond className="text-[20px] relative right-[4px]" />
            <p className={`${!open && "hidden"} text-sm font-[400]`}>
              Niveaux de Licences
            </p>
          </div>

          <FaAngleRight
            className={`${!open && "hidden"} relative right-6 ${
              open2 && "rotate-[90deg] text-[#5156C0]"
            }`}
          />
        </div>
        {/* debut suous menu******************************************* */}
        <SubMenuOne open={open2} action={open} />
        <SubMenuTwo open={open2} action={open} />
      </li>
    </div>
  );
};

export default MenuThree;
