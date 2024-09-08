import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Sidebar.css";
import MenuOne from "./Menu/MenuOne";
import MenuTwo from "./Menu/MenuTwo";
import MenuThree from "./Menu/MenuThree";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  {
    /** ========== Left Sidebar Start ========== */
  }

  return (
    <div>
      <div className="w-16"></div>
      <div
        className={`bg-[#F8FAFC]  sideBar p-5 pt-8 z-20  transition-all max-sm:hidden ${
          open ? "w-72" : "w-16"
        }`}
      >
        <FaBars
          className={`bg-white  text-2xl text-[20px] absolute right-7 top-[41px] text-[#5F6273] cursor-pointer ${
            !open && "rotate-180 "
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="logo flex gap-2 capitalize  text-[18px] items-center text-[#5F6273] h-[40px]">
          <h1
            className={`origin-left max-md:hidden font-medium duration-300  text-[15px] ${
              !open && "scale-0"
            }`}
          >
            <strong>Jon Easy</strong> dashboard
          </h1>
        </div>
        {/* commencement des navs **************************************************************************/}
        <div>
          <ul>
            <nav>
              <div
                className={`text-[14px] my-[20px] capitalize text-[#74788D]  ${
                  open ? "" : "opacity-0"
                }`}
              >
                Configurations
              </div>
              {/* debut projet *********************************************/}
              <div className="flex flex-col gap-y-8">
                <MenuOne open={open} />
                <MenuTwo open={open} />
                <MenuThree open={open} />
              </div>
              {/*fin projet******************************************************  */}
              <div
                className={`text-[14px] my-[20px] capitalize text-[#74788D]  ${
                  open ? "" : "opacity-0"
                }`}
              >
                Elements
              </div>
            </nav>
          </ul>
        </div>
        {/* fin des navs */}

        {/* fin de la fleche pointeur */}
      </div>
    </div>
  );
};

export default SideBar;
