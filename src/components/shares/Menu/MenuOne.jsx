import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import SubMenu from "./SubMenu/SubMenu";
import SubMenuPrivleges from "./SubMenu/SubMenuPrivleges";
import SubMenuProfilsUtilisateur from "./SubMenu/SubMenuProfilsUtilisateur";
const MenuOne = ({ open }) => {
  const [open2, setopen2] = useState(false);

  return (
    <div>
      <li className={`relative  cursor-pointer  ${open ? "left-3" : "left-0"}`}>
        <div
          onClick={() => {
            setopen2(!open2);
          }}
          className={`flex items-center justify-between    text-[#5F6273] hover:bg-slate-400 font-bold rounded-md w-full ${
            open2 && " text-[#5156C0]"
          }`}
        >
          <div className="flex items-center gap-4">
            <MdOutlineSecurity className="text-[20px] relative right-[4px]" />
            <p className={`${!open && "hidden"} text-sm font-[400]`}>
              Niveaux d`accès
            </p>
          </div>

          <FaAngleRight
            className={`${!open && "hidden"} relative right-6 ${
              open2 && "rotate-[90deg] text-[#5156C0]"
            }`}
          />
        </div>
        {/* debut suous menu******************************************* */}
        <SubMenu open={open2} action={open} />
        <SubMenuPrivleges open={open2} action={open} />
        <SubMenuProfilsUtilisateur open={open2} action={open} />
      </li>
    </div>
  );
};

export default MenuOne;
