import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

const SubMenuTwo = ({ open, action }) => {
  const [open3, setopen3] = useState(false);
  const routeOne = "/ManageSystemGroups";

  return (
    <ul
      className={`${open3 ? "h-[90px]" : "h-[50px]"} 
      }
                 h-[150px]  transition-all overflow-hidden duration-300 ${
                   !open && "hidden"
                 } `}
    >
      <nav className="text-[#5F6273]">
        <li className="0 ">
          <a
            href="#"
            className={`flex items-center  
                       hover:bg-slate-400 font-semibold  rounded-md p-2 mt-1 w-full
                       `}
            onClick={() => {
              setopen3(!open3);
            }}
          >
            <div
              className={`items-center  py-2 pl-2 w-full  text-sm font-[400]   flex justify-between ${
                open3 && " text-[#5156C0]"
              }`}
            >
              <div
                className={`${!action && "hidden"} flex  items-center gap-2 `}
              >
                <HiOutlineSquare3Stack3D className={` text-[18px] `} />
                <p>Groupes admins</p>
              </div>
              <FaAngleRight
                className={`${open3 && "rotate-[90deg]"} relative right-8`}
              />
            </div>
          </a>
          {/* sous menu 2 */}
          <ul
            className={`${open3 && "h-[400px]"}
                       h-0 overflow-hidden transition-all duration-300  w-full ${
                         !open && "hidden"
                       } `}
          >
            <nav className=" w-full  ">
              {/* premier li */}
              <li className=" w-full relative left-8">
                <Link
                  to={routeOne}
                  className={` text-sm font-[400] flex items-center gap-2 hover:text-[#5156C0]
                         rounded-md p-2 mt-1 w-full
                       `}
                >
                  <p>Ajouter des groupes</p>
                </Link>
              </li>
            </nav>
          </ul>
        </li>
      </nav>
    </ul>
  );
};

export default SubMenuTwo;
