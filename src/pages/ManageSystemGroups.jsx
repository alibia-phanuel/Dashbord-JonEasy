import { FaAngleRight } from "react-icons/fa6";
import SideBar from "../components/shares/SideBar";
import Header from "../components/shares/Header";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { IoList } from "react-icons/io5";
import userOne from "../assets/images/users/avatar-4.jpg";
import TableAction from "../components/tableaction/TableAction";
const ManageSystemGroups = () => {
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
        <div className="flex gap-4 max-md:flex-wrap flex-wrap md:flex-nowrap">
          <div className="col-span-12 xl:col-span-3 space-y-2 mx-4">
            {/**  <!--Contenu d'enegistrement de données--> */}
            <div className="card border rounded p-4 mb-0 max-md:w-full">
              <div className="card-body pb-0">
                <div className="flex flex-row item-center space-x-2">
                  <img
                    src="../src/assets/images/icons/admin-icon.png"
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                  <h4 className="text-15 pt-1 text-gray-700 mb-4 ">
                    Créer un groupe
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <label
                      className="block font-medium text-gray-700  mb-2 text-[14px]"
                      htmlFor="default-input"
                    >
                      Nom de traductible du libelé
                    </label>
                    <input
                      className="w-full placeholder:text-sm py-1.5 rounded outline-none pl-4 border border-gray-200 focus:border focus:border-violet-500 focus:ring-0  "
                      type="text"
                      id="default-input"
                      placeholder="Se referer au manifest. Feuille Gestion Groupes systèmes"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label
                      className="block font-medium text-gray-700  mb-2 text-[14px]"
                      htmlFor="default-input"
                    >
                      Code de permission
                    </label>
                    <input
                      type="number"
                      id="default-input"
                      placeholder="Se referer au manifest. Feuille Gestion Groupes systèmes "
                      className="w-full placeholder:text-sm py-1.5 rounded outline-none pl-4 border border-gray-200 focus:border focus:border-violet-500 focus:ring-0  "
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block font-medium text-gray-700  mb-2 text-[14px]"
                      htmlFor="default-input"
                    >
                      Description traductible du rôle
                    </label>
                    <textarea
                      className="w-full border h-14 resize-none placeholder:text-sm py-1.5 rounded border-gray-100 focus:border focus:border-violet-500 focus:ring-0  px-4 outline-none"
                      type="text"
                      id="default-input"
                      placeholder="Se referer au manifest. Feuille Gestion Groupes systèmes"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn text-[14px] text-red-500 border py-2 rounded hover:text-white border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:text-white focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600 w-full"
                  >
                    Créer le groupe administrateur
                  </button>
                </form>
              </div>
            </div>

            {/** <!--Contenu d'affichage de données--> */}
            <div className="card border  rounded ">
              <div className="card-header border-b border-gray-50 p-5  bg-indigo-50">
                <div className="flex flex-row items-center space-x-2">
                  <h5 className="uppercase text-gray-600  flex-1 font-normal">
                    Code de permission
                  </h5>
                  <h5 className="uppercase text-gray-600 dark:text-gray-700">
                    4053
                  </h5>
                </div>
              </div>
              <div className="card-body p-4">
                <h6 className="mb-1 text-15 text-gray-700 font-bold">
                  Special title treatment
                </h6>
                <p className="card-text text-gray-600">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="btn text-white bg-red-500 p-2 flex justify-center items-center gap-2 text-[14px] rounded border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600"
                  >
                    <TiDeleteOutline className="text-[20px]" />
                    <span className="align-middle">Supprimer ce groupe</span>
                  </button>
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
                        className="py-0.5 px-1 w-40 rounded border-gray-200 ml-2 /50  border outline-none"
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
                        <div className="dropdown relative">
                          <a
                            className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenu123"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                              />
                            </svg>
                          </a>
                          <ul
                            className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 -top-2 list-none text-left -left-5 w-32  
                                                                rounded-lg shadow-lg hidden bg-clip-padding border-none"
                            aria-labelledby="dropdownMenu123"
                          >
                            <li>
                              <a
                                data-tw-toggle="modal"
                                data-tw-target="#modal-idextralargemodal"
                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-50/50 "
                                href="#"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                data-tw-toggle="modal"
                                data-tw-target="#modal-id"
                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent
                                                                    text-gray-700  hover:bg-gray-50/50 "
                                href="#"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
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
                        <div className="dropdown relative">
                          <a
                            className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenu123"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                              />
                            </svg>
                          </a>
                          <ul
                            className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 -top-2 list-none text-left -left-5 w-32  
                                                                rounded-lg shadow-lg hidden bg-clip-padding border-none"
                            aria-labelledby="dropdownMenu123"
                          >
                            <li>
                              <a
                                data-tw-toggle="modal"
                                data-tw-target="#modal-idextralargemodal"
                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-50/50 "
                                href="#"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                data-tw-toggle="modal"
                                data-tw-target="#modal-id"
                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-50/50 "
                                href="#"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
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
                        <TableAction />
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
                        <TableAction />
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
                        <TableAction />
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
                        <TableAction />
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
                        <TableAction />
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
                        <TableAction />
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
                        <TableAction />
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
                        <TableAction />
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
                          className="page-link relative block bg-[#5156BE] py-2 px-3 border-0 group-hover bg-violet-500 outline-none text-white hover:text-violet-500 group-hover:bg-gray-200   focus:shadow-none transition-all duration-300"
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

export default ManageSystemGroups;
