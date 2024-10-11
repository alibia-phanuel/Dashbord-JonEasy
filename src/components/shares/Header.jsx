import { BsSearch } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import usa from "../../assets/flag.png";
import profil from "../../assets/flag.png";
import piture from "../../assets/profile.jpg";
const Header = () => {
  return (
    <div className="w-full flex  justify-between items-center px-4 bg-white border-b">
      <div
        className="flex max-md:hidden flex-row-reverse items-center rounded-md bg-[#F7F7F9] p-1  
        "
      >
        <div className="bg-[#5156BE] text-white rounded-md flex justify-center items-center h-[30px] w-[40px] shadow-lg">
          <BsSearch className=" text-[10px] block float-left cursor-pointer " />
        </div>
        <input
          type="search"
          placeholder="Search...."
          className="text-base bg-transparent w-full text-[#3F414D] focus:outline-none pl-3"
        />
      </div>
      <div className="flex justify-between items-center w-[300px] max-md:w-full ">
        {/**
          <div className="w-[30px] cursor-pointer">
          <img src={usa} alt="flag" className="w-ful" />
        </div> */}
        {/**
          <div>
          <FaRegMoon className="cursor-pointer" />
        </div> */}
        {/**
         <div>
          <RxDashboard className="cursor-pointer" />
        </div> */}
        <div className="text-[23px] relative">
          <div className="text-[15px] font-semibold bg-[#FD625E] rounded-full flex justify-center w-[20px] items-center text-white absolute left-2  bottom-5">
            5
          </div>
          <IoIosNotificationsOutline className="cursor-pointer" />
        </div>
        <div className="bg-[#F7F7F9]  h-[75px] flex justify-center items-center w-20">
          <div className="w-[30px] rounded-full ">
            <img src={piture} alt="profle" className="w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
