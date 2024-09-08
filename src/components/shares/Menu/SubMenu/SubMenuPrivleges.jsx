import { useState } from "react";
import { Link } from "react-router-dom";
import { RiKey2Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const SubMenuPrivleges = ({ open, action }) => {
  const [open3, setopen3] = useState(false);
  const routeOne = "/ManageSystemPrivileges";
  const routeTwo = "/ManageBusinessPrivileges";

  return (
    <ul
      className={`${open3 ? "h-[150px] " : "h-[50px]"} 
      }
                 h-[150px]  transition-all overflow-hidden duration-300 ${
                   !open && "hidden"
                 } `}
    >
      <nav className="text-[#5F6273]  ">
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
              className={`
              }items-center  py-2 pl-2 w-full  text-sm font-[400]  flex justify-between ${
                open3 && " text-[#5156C0]"
              }`}
            >
              <div
                className={`${!action && "hidden"} flex  items-center gap-2 `}
              >
                <RiKey2Line className={` text-[18px] `} />
                <p>Privileges</p>
              </div>
              <FaAngleRight
                className={`${open3 && "rotate-[90deg]"} relative right-10`}
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
                  <p>Systemes</p>
                </Link>
              </li>
              {/* premier li */}
              <li className=" w-full relative left-8">
                <Link
                  to={routeTwo}
                  className={` text-sm font-[400] flex items-center gap-2 
                          rounded-md p-2 mt-1 w-full hover:text-[#5156C0]
                       `}
                >
                  <p>Bussiness</p>
                </Link>
              </li>
            </nav>
          </ul>
        </li>
      </nav>
    </ul>
  );
};

export default SubMenuPrivleges;
