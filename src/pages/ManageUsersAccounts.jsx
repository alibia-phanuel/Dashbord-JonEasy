import { FaAngleRight } from "react-icons/fa6";
import Header from "../components/shares/Header";
import SideBar from "../components/shares/SideBar";
import { RiDashboardFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import UserTableAction from "../components/tableaction/UserTableAction";
import { IoList } from "react-icons/io5";
import userOne from "../assets/images/users/avatar-4.jpg";
const ManageUsersAccounts = () => {
  return (
    <div className="w-full flex">
      <SideBar></SideBar>
      <div className="w-[calc(100%-4rem)] h-screen flex  flex-col">
        <div className="  w-full">
          <Header />
        </div>
        <div className="px-4">
          <div className="flex  justify-between  items-center py-[15px] gap-2">
            {/**Dashboard header */}
            <div className="font-bold text-lg text-[#2A3661]">
              Gestion des comptes administrateurs
            </div>
            <div className=" flex gap-2  items-center">
              <div className="font-semibold text-[#372C33] cursor-pointer max-sm:hidden">
                Configurations
              </div>
              <div className="text-[#372C33]">
                <FaAngleRight />
              </div>
              <div className="text-[#989698] cursor-pointer hover:text-[#372C33]  duration-300">
                Gestion des comptes administrateurs
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4 px-4 flex-wrap md:flex-nowrap">
          <div className="flex  flex-col gap-4 w-[500px]  ">
            {/**<!--Contenu d'enegistrement de données--> */}
            <div className="card border rounded p-4">
              <div className="card-body pb-0">
                <div className="flex flex-row item-center space-x-2 mb-4">
                  <img
                    src="../src/assets/images/icons/admin-icon.png"
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                  <h4 className="text-15 pt-1 text-gray-700 ">
                    Créer un compte administrateur
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-2">
                    <label
                      className="block font-medium text-gray-700  mb-2"
                      htmlFor="default-input"
                    >
                      Identifiant de profil
                    </label>
                    <input
                      className="w-full placeholder:text-sm px-2 py-1.5 outline-none rounded border-gray-300 border text-black font-bold focus:border focus:border-violet-500 focus:ring-0   "
                      type="text"
                      id="default-input"
                      placeholder="Ex: @alpha-bravo"
                    />
                  </div>

                  <div className="mb-2">
                    <div className="mb-3">
                      <label className="block font-medium text-gray-700  mb-2">
                        Sélectionner le niveau de profil
                      </label>
                      <select className=" border-gray-300 border  w-full rounded outline-none px-2 py-2.5 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0  ">
                        <option>Super</option>
                        <option>Package Ops</option>
                        <option>Sales Points Ops</option>
                        <option>Finance OPS</option>
                        <option>System Ops</option>
                        <option>Wallets/E-Pay Ops</option>
                        <option>CRM Ops</option>
                        <option>Business DevOps</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      className="block font-medium text-gray-700  mb-2"
                      htmlFor="default-input"
                    >
                      Numéro téléphone
                    </label>
                    <input
                      className="w-full placeholder:text-sm py-1.5 rounded border-gray-300 border outline-none px-2 focus:border focus:border-violet-500 focus:ring-0   "
                      type="text"
                      id="password-input"
                      placeholder="Ex: 237 6 XX XX XX XX"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      className="block font-medium text-gray-700  mb-2"
                      htmlFor="default-input"
                    >
                      Email
                    </label>
                    <input
                      className="w-full placeholder:text-sm py-1.5 rounded border-gray-300 outline-none border px-2 focus:border focus:border-violet-500 focus:ring-0   "
                      type="email"
                      id="password-input"
                      placeholder="Ex: john.doe@joneasy.com"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      className="block font-medium text-gray-700  mb-2"
                      htmlFor="default-input"
                    >
                      Generated password
                    </label>
                    <div className="w-full pr-2 rounded text-sm border-gray-300 border  focus:border focus:border-violet-500 focus:ring-0  flex flex-row items-center space-x-2">
                      <input
                        className="flex-1 outline-none border-0 placeholder:text-sm py-1.5  px-2  "
                        type="password"
                        id="default-input"
                        value=""
                        placeholder="`fscf9s88+cecr`"
                      />
                      <i
                        data-feather="copy"
                        className="text-xs text-gray-200 cursor-pointer"
                      ></i>
                    </div>
                  </div>

                  <div className="mb-2 flex flex-row items-center justify-center space-x-1">
                    <h5 className="font-bold">JE-</h5>
                    <input
                      className="w-14 placeholder:text-sm py-1.5 px-2  rounded border-gray-300 border focus:border focus:border-violet-500 focus:ring-0 outline-none"
                      type="text"
                      id=""
                      placeholder=""
                    />
                    <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                    <input
                      className="w-14 placeholder:text-sm  px-2 py-1.5 rounded border-gray-300 border focus:border focus:border-violet-500 focus:ring-0 outline-none"
                      type="text"
                      id=""
                      placeholder=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn text-red-500 hover:text-white py-2 rounded border-red-500 hover:bg-red-600 hover:border-red-600 border focus:bg-red-600 focus:text-white focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600 w-full"
                  >
                    Créer le compte
                  </button>
                </form>
              </div>
            </div>

            {/**<!--Contenu de presentation des roles existants--> */}
            <div className="card rounded p-4  border">
              <div className="card-body">
                <div className="search-box">
                  <h5 className="mb-3 text-gray-700 ">
                    Rechercher un profil précis
                  </h5>
                  <div className="relative px-2 border rounded py-2 flex items-center justify-center  gap-2">
                    <CiSearch className="text-[20px] text-gray-500" />
                    <input
                      type="text"
                      className="w-full border border-transparent bg-gray-50/50 rounded pl-1 placeholder:text-13 text-gray-700 placeholder:text-gray-400 outline-none  "
                      placeholder="Saisir code ou libélé traductible..."
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <h5 className="mb-4 text-gray-700 ">
                    Groupes administrateurs
                  </h5>
                  <ul className="list-unstyled font-medium px-2">
                    <li className="border-b">
                      <a
                        href="#"
                        className="text-gray-900 pb-4  border-b border-gray-50 flex justify-between items-center"
                      >
                        Design
                        <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1 ">
                          02
                        </span>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#"
                        className="text-gray-900 py-4 flex  justify-between items-center border-b border-gray-300"
                      >
                        Development{" "}
                        <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left ms-1 text-xs py-0.5 px-1 ">
                          04
                        </span>
                      </a>
                    </li>
                    <li className="border-b">
                      <a
                        href="#"
                        className="text-gray-900 py-4 flex  justify-between items-center border-b border-gray-300 "
                      >
                        Business
                        <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1 ">
                          12
                        </span>
                      </a>
                    </li>
                    <li className="border-b">
                      <a
                        href="#"
                        className="text-gray-900 py-4 flex  justify-between items-center border-b border-gray-300 "
                      >
                        Project
                        <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1 ">
                          08
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 pt-4 pb-0 flex  justify-between items-center  "
                      >
                        Travel
                        <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1 ">
                          10
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/**<!--Contenu de tableau de donnees-->*/}
          <div className="container-fluid px-[0.625rem] w-full ">
            <div className=" grid grid-cols-1 ">
              <div className="grid grid-cols-12 items-stretch">
                <div className="col-span-12 lg:col-span-6 self-center">
                  <h5 className="text-15 text-gray-600 ">
                    Comptes du groupe{" "}
                    <span>
                      <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-400 px-1 py-[1px] rounded font-bold  ">
                        Sales Points Manager
                      </div>
                    </span>{" "}
                    <span className="text-gray-500 font-normal ml-2 ">
                      (834)
                    </span>
                  </h5>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mt-5 lg:mt-0 lg:justify-end">
                    <div>
                      <ul className="flex flex-wrap ">
                        <li className="nav-item   text-center items-center flex p-2 rounded text-gray-400 cursor-pointer">
                          <IoList />
                        </li>
                        <li className="nav-item  bg-violet-500 text-white justify-center items-center flex p-2 rounded  cursor-pointer">
                          <RiDashboardFill />
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="btn bg-gray-50 border-gray-50 flex  justify-center items-center gap-2 p-2  "
                      >
                        <AiOutlinePlus />
                        Add New
                      </a>
                    </div>
                    <div>
                      <div className="dropstart text-end relative ">
                        <a
                          className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle "
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenu1"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-horizontal-rounded"></i>
                        </a>
                        <ul
                          className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 top-5 list-none text-left ltr:-right-10 rtl:-left-10 w-40
                                                            rounded-lg shadow-lg hidden bg-clip-padding border-none "
                          aria-labelledby="dropdownMenu1"
                        >
                          <li>
                            <a
                              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-50/50  "
                              href="#"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap
                                                                bg-transparent text-gray-700  hover:bg-gray-50/50  "
                              href="#"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent
                                                                text-gray-700  hover:bg-gray-50/50  "
                              href="#"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-center  justify-between">
                  <div className="flex">
                    <label
                      htmlFor="countries_multiple"
                      className="text-gray-600 mx-2 "
                    >
                      Show
                      <select
                        id="countries"
                        className="py-0.5 w-16 inline-block text-[13px] bg-white border border-gray-100 text-gray-900 rounded p-2.5 focus:ring-1 focus:ring-violet-50    "
                      >
                        <option selected>10</option>
                        <option value="US">20</option>
                        <option value="CA">30</option>
                        <option value="FR">40</option>
                        <option value="DE">50</option>
                      </select>
                      entries
                    </label>
                  </div>
                  <div className="ltr:md:ml-auto rtl:md:mr-auto mt-4 md:mt-0">
                    <label className="text-gray-200">
                      Search:
                      <input
                        type="search"
                        className="py-0.5 px-1 w-40 rounded border-gray-200 ml-2 /50 outline-none border "
                        placeholder=""
                        aria-controls=""
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-5 relative overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead className="border-b border-gray-50 cursor-pointer ">
                    <tr className="text-gray-700 ">
                      <th className="relative text-start p-4 ">
                        <input
                          type="checkbox"
                          value=""
                          className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                        />
                        <div className="after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                        <div className="before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                      </th>
                      <th className="relative text-start p-4 ">
                        Name
                        <div className="after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                        <div className="before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                      </th>
                      <th className="relative text-start p-4 ">
                        Position
                        <div className="after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                        <div className="before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                      </th>
                      <th className="relative text-start p-4 ">
                        Email
                        <div className="after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                        <div className="before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                      </th>
                      <th className="relative text-start p-4 ">
                        Tags
                        <div className="after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                        <div className="before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                      </th>
                      <th className="relative w-28 text-start p-4 ">
                        Action
                        <div className="after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                        <div className="before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4 ">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2 "
                        />
                        <a href="#" className="text-gray-700 ml-2">
                          Phyllis Gatlin
                        </a>
                      </td>
                      <td className="p-4 ">UI/UX Designer</td>
                      <td className="p-4 ">phyllisgatlin@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-8 bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Photoshop
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          illustrator
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2 mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          James Nix
                        </a>
                      </td>
                      <td className="p-4 ">Frontend Developer</td>
                      <td className="p-4 ">jamesnix@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Html
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Css
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          2 + more
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2  mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          Darlene Smith
                        </a>
                      </td>
                      <td className="p-4 ">Backend Developer</td>
                      <td className="p-4 ">darlenesmith@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Php
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Java
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Python
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <div className="h-8 w-8 rounded-full bg-gray-50/30 text-center ltr:mr-2 rtl:ml-2">
                          <i className="bx bxs-user-circle text-2xl text-gray-100 leading-snug"></i>
                        </div>
                        <a href="#" className="text-gray-700 ">
                          William Swift
                        </a>
                      </td>
                      <td className="p-4 ">Full Stack Developer</td>
                      <td className="p-4 ">williamswift@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Ruby
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Php
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          2 + more
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <div className="h-8 w-8 rounded-full bg-gray-50/30 text-center ltr:mr-2 rtl:ml-2">
                          <i className="bx bxs-user-circle text-2xl text-gray-100 leading-snug"></i>
                        </div>
                        <a href="#" className="text-gray-700 ">
                          Kevin West
                        </a>
                      </td>
                      <td className="p-4 ">Frontend Developer</td>
                      <td className="p-4 ">kevinwest@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Html
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Css
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          2 + more
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2  mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          {" "}
                          Tommy Hayes
                        </a>
                      </td>
                      <td className="p-4 ">UI/UX Designer</td>
                      <td className="p-4 ">tommyhayes@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium ">
                          Photoshop
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium ">
                          illustrator
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2  mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          {" "}
                          Diana Owens
                        </a>
                      </td>
                      <td className="p-4 ">Graphic Designer</td>
                      <td className="p-4 ">dianaowens@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Photoshop
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          illustrator
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2  mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          {" "}
                          Paul Sanchez
                        </a>
                      </td>
                      <td className="p-4">Angular Developer</td>
                      <td className="p-4">paulsanchez@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Php
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Javascript
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4  gap-2">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2  mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          {" "}
                          Peter Dryer
                        </a>
                      </td>
                      <td className="p-4 ">Web Designer</td>
                      <td className="p-4 ">peterdryer@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Html
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Css
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          2 + more
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 text-gray-600 ">
                      <td>
                        <div className="p-4">
                          <input
                            type="checkbox"
                            value=""
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0   "
                          />
                        </div>
                      </td>
                      <td className="inline-flex items-center p-4">
                        <img
                          src={userOne}
                          alt=""
                          className="h-8 w-8 rounded-full ltr:mr-2 rtl:ml-2  mr-2"
                        />
                        <a href="#" className="text-gray-700 ">
                          Gerald Moyer
                        </a>
                      </td>
                      <td className="p-4 ">Backend Developer</td>
                      <td className="p-4 ">geraldmoyer@minia.com</td>
                      <td className="p-4 flex flex-wrap gap-1">
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Php
                        </div>
                        <div className="text-[13px] bg-violet-50/50 hover:bg-violet-50 cursor-pointer transition-all duration-300 inline-block text-violet-500 px-1 py-[1px] rounded font-medium  ">
                          Javascript
                        </div>
                      </td>
                      <td>
                        <UserTableAction />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center place-content-between mt-4 mb-16">
                <div className="mt-4 mb-2 w-full px-2">
                  <p className="text-gray-600 relative left-4 ">
                    Showing 1 to 10 of 12 entries
                  </p>
                </div>
                <div className="flex mt-2.5 mx-2">
                  <nav aria-label="Page navigation example border">
                    <ul className="flex list-style-none">
                      <li
                        className="border rounded-l border-gray-100  "
                        disabled
                      >
                        <a
                          className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-400 hover:text-violet-500 focus:shadow-none hover:bg-gray-200   pointer-events-none"
                          href="#"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="border border-l-0 border-r-0 border-violet-500 group hover:border-gray-200 transition-all duration-300  ">
                        <a
                          className="page-link relative block py-2 px-3 border-0 group-hover bg-violet-500 outline-none text-white hover:text-violet-500 group-hover:bg-gray-200   focus:shadow-none transition-all duration-300"
                          href="#"
                        >
                          1
                        </a>
                      </li>
                      <li className="border border-l-0 border-r-0 group  transition-all duration-300  ">
                        <a
                          className="page-link relative block py-2 px-3 border-0 group-hover outline-none  text-gray-400  focus:shadow-none transition-all duration-300"
                          href="#"
                        >
                          2
                        </a>
                      </li>
                      <li
                        className="border rounded-l border-gray-100  "
                        disabled
                      >
                        <a
                          className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-400 hover:text-violet-500 focus:shadow-none hover:bg-gray-200   pointer-events-none"
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersAccounts;
