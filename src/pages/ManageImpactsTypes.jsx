import SideBar from "../components/shares/SideBar";
import Header from "../components/shares/Header";
import { FaAngleRight } from "react-icons/fa6";
import { PiDownloadSimple } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { RiDownloadFill } from "react-icons/ri";
import TableAction from "../components/tableaction/TableAction";

import { CiCircleRemove } from "react-icons/ci";
const ManageImpactsTypes = () => {
  return (
    <div className="w-full  flex">
      <SideBar></SideBar>
      <div className=" h-screen flex  flex-col  w-[calc(100%-4rem)]">
        <div className="  w-full">
          <Header />
        </div>
        <div className="px-4">
          <div className="flex  justify-between  items-center py-[15px] gap-2">
            {/**Dashboard header */}
            <div className="mb-sm-0 text-lg font-semibold grow text-gray-800">
              Gestion des impacts de licences
            </div>
            <div className=" flex gap-2  items-center">
              <div className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 cursor-pointer">
                Configurations
              </div>
              <div className="text-[#372C33]">
                <FaAngleRight />
              </div>
              <div className="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-500 hover:text-gray-900 ltr:md:ml-2 rtl:md:mr-2 cursor-pointer">
                Gestion des impacts de licences
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center  w-full">
            {/**  <!--Contenu d'enegistrement de données--> */}
            <div className="left flex flex-col gap-4 max-md:w-full">
              <div className="border-[#e5e7eb] border rounded-lg    flex flex-col gap-5 p-4">
                <div className="card-body pb-0">
                  <div className="flex flex-row item-center space-x-2">
                    <img
                      src="../src/assets/images/icons/rule-icon.png"
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                    <h4 className="pt-1 text-gray-700 text-[14px] ">
                      Créer un nouveau type sur{" "}
                      <b className="text-indigo-600 font-bold">Jon Easy PRO</b>{" "}
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form className="text-sm">
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700  mb-2"
                        htmlFor="default-input"
                      >
                        Nom de traductible du libelé
                      </label>
                      <input
                        className="px-4 w-full placeholder:text-sm py-1.5 rounded border-gray-300 focus:border focus:border-violet-500 focus:ring-0  border  outline-none"
                        type="text"
                        id="default-input"
                        placeholder="Se referer au manifest. Feuille Gestion  licences"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700  mb-2"
                        htmlFor="default-input"
                      >
                        Code de permission
                      </label>
                      <input
                        className="px-4 w-full placeholder:text-sm py-1.5 rounded border-gray-300 focus:border focus:border-violet-500 focus:ring-0  border  outline-none"
                        type="number"
                        id="default-input"
                        placeholder="Se referer au manifest. Feuille Gestion  licences"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700  mb-2"
                        htmlFor="default-input"
                      >
                        Description traductible du rôle
                      </label>
                      <textarea
                        className="px-4 w-full h-14 resize-none placeholder:text-sm py-1.5 rounded  focus:border focus:border-violet-500 border focus:ring-0  border-gray-300 outline-none "
                        type="text"
                        id="default-input"
                        placeholder="Se referer au manifest. Feuille Gestion  licences"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn text-red-500 hover:text-white border py-2 rounded-lg transition-all border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:text-white focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600 w-full"
                    >
                      Enregistrer ce nouveau type
                    </button>
                  </form>
                </div>
              </div>
              {/**code de permission */}
              <div className="border border-gray-300   rounded-lg overflow-hidden ">
                <div className="card-header border-b border-gray-50 p-5  bg-indigo-50 ">
                  <div className="flex flex-row items-center space-x-2">
                    <h5 className="uppercase text-gray-600 flex-1 font-normal">
                      Code d`impact métier
                    </h5>
                    <h5 className="uppercase text-gray-600 font-bold">
                      Main-402
                    </h5>
                  </div>
                </div>
                <div className="card-body   rounded-lg p-4">
                  <h6 className="mb-1 text-15 text-gray-700  font-semibold ">
                    Special title treatment
                  </h6>
                  <p className="text-[14px] text-gray-600">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <div className="mt-6 text-sm">
                    <button
                      type="button"
                      className="btn flex justify-center items-center gap-2 text-white bg-[#FD625E] border-[#FD625E] p-2 rounded-lg  hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600"
                    >
                      <CiCircleRemove className="text-[25px]" />
                      <span className="align-middle">
                        Supprimer ce type d`impact
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**<!--Contenu de tableau de donnees--> */}
            <div className="mb-0  border-[#e5e7eb] border  text-sm rounded-lg p-4 w-full">
              <div className="card-body">
                <div className="flex flex-col">
                  <div className="flex gap-2 flex-wrap ">
                    <button
                      type="button"
                      className="btn bg-[#E6E6EB] border-transparent text-gray-800 p-2 rounded-lg  flex justify-center items-center gap-2"
                    >
                      <CiCirclePlus className=" text-gray-800  text-[20px]" />
                      Add Invoice
                    </button>
                    <button
                      type="button"
                      className="btn bg-[#5156BE] border-transparent text-white p-2 rounded-lg flex justify-center items-center gap-2"
                    >
                      <RiDownloadFill /> Excel
                    </button>
                  </div>
                  <div>{/**menu drop down */}</div>

                  <div className="flex justify-center items-center">
                    <div className="mt-5 flex justify-between items-center  w-full">
                      <div className="flex flex-wrap items-center  w-full justify-between">
                        <div className="flex gap-4 items-center">
                          <label
                            htmlFor="countries_multiple"
                            className="text-gray-600 m--2"
                          >
                            <span className="mr-2"> Show</span>
                            <select
                              id="countries"
                              className="py-0.5 w-16 inline-block text-11 bg-white border border-gray-100 text-gray-900 rounded p-2.5 focus:ring-1 focus:ring-violet-50   "
                            >
                              <option selected>10</option>
                              <option value="US">20</option>
                              <option value="CA">30</option>
                              <option value="FR">40</option>
                              <option value="DE">50</option>
                            </select>

                            <span className="ml-2"> entries</span>
                          </label>
                        </div>
                        <div className="ltr:ml-auto rtl:mr-auto">
                          <label className="">
                            <span className="mr-2"> Search:</span>
                            <input
                              type="search"
                              className="py-0.5 px-1 w-40 rounded border-gray-100 border outline-none"
                              placeholder=""
                              aria-controls=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-5 relative overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b border-gray-50  cursor-pointer">
                          <tr className="text-gray-700">
                            <th className="relative w-8 text-start p-4">
                              <input
                                type="checkbox"
                                value=""
                                className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                              />
                              <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1"></div>
                              <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3"></div>
                            </th>
                            <th className="relative w-[120px] text-start p-4 ">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div>Invoice ID</div>
                              </div>
                            </th>
                            <th className="relative w-[218px] text-start p-4 ">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div>Date</div>
                              </div>
                            </th>
                            <th className="relative w-72 text-start p-4 ">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div> Billing Name</div>
                              </div>
                            </th>
                            <th className="relative w-44 text-start p-4">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div>Amount</div>
                              </div>
                            </th>
                            <th className="relative w-40 text-start p-4 ">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div>Status</div>
                              </div>
                            </th>
                            <th className="relative w-40 text-start p-4 ">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div>Download Pdf</div>
                              </div>
                            </th>
                            <th className="relative w-[90px] text-start p-4 ">
                              <div className="flex gap-10">
                                <div className="">
                                  <div className="hidden left-6 xl:block after:content-['↓'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-1 rtl:left-1"></div>
                                  <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-500 font-bold text-15 ltr:right-3 rtl:left-3"></div>
                                </div>
                                <div>Action</div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b   text-gray-600 bg-indigo-50 border-gray-200 border">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0215
                                </a>
                              </div>
                            </td>
                            <td className="p-4">12 Oct, 2020</td>
                            <td className="p-4">Connie Franco</td>
                            <td className="p-4">$26.30</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border  text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0214
                                </a>
                              </div>
                            </td>
                            <td className="p-4">11 Oct, 2020</td>
                            <td className="p-4">Paul Reynolds</td>
                            <td className="p-4">$24.20</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border  text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0213
                                </a>
                              </div>
                            </td>
                            <td className="p-4">10 Oct, 2020</td>
                            <td className="p-4">Ronald Patterson</td>
                            <td className="p-4">$20.20</td>
                            <td className="p-4">
                              <div className="text-xs bg-yellow-50 inline-block text-yellow-500 px-1 py-0.5 rounded font-medium ">
                                Pending
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b  border-gray-200 border  text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0212
                                </a>
                              </div>
                            </td>
                            <td className="p-4">09 Oct, 2020</td>
                            <td className="p-4">Adella Perez</td>
                            <td className="p-4">$16.80</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border  text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0211
                                </a>
                              </div>
                            </td>
                            <td className="p-4">08 Oct, 2020</td>
                            <td className="p-4">Theresa Mayers</td>
                            <td className="p-4">$22.00</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0210
                                </a>
                              </div>
                            </td>
                            <td className="p-4">07 Oct, 2020</td>
                            <td className="p-4">Michael Wallace</td>
                            <td className="p-4">$15.60</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border   text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0209
                                </a>
                              </div>
                            </td>
                            <td className="p-4">06 Oct, 2020</td>
                            <td className="p-4">Oliver Gonzales</td>
                            <td className="p-4">$26.50</td>
                            <td className="p-4">
                              <div className="text-xs bg-yellow-50 inline-block text-yellow-500 px-1 py-0.5 rounded font-medium ">
                                Pending
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border  text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0208
                                </a>
                              </div>
                            </td>
                            <td className="p-4">05 Oct, 2020</td>
                            <td className="p-4">David Burke</td>
                            <td className="p-4">$24.20</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 border text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0207
                                </a>
                              </div>
                            </td>
                            <td className="p-4">04 Oct, 2020</td>
                            <td className="p-4">Willie Verner</td>
                            <td className="p-4">$21.30</td>
                            <td className="p-4">
                              <div className="text-xs bg-yellow-50 inline-block text-yellow-500 px-1 py-0.5 rounded font-medium ">
                                Pending
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                          <tr className="border-b border-gray-50  text-gray-600">
                            <td>
                              <div className="p-4">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0  "
                                />
                              </div>
                            </td>
                            <td>
                              <div className="p-4">
                                <a
                                  href="javascript: void(0);"
                                  className="text-black font-medium "
                                >
                                  #MN0206
                                </a>
                              </div>
                            </td>
                            <td className="p-4">03 Oct, 2020</td>
                            <td className="p-4">Felix Perry</td>
                            <td className="p-4">$22.60</td>
                            <td className="p-4">
                              <div className="text-xs bg-green-50 inline-block text-green-500 px-1 py-0.5 rounded font-medium ">
                                Paid
                              </div>
                            </td>
                            <td className="p-4">
                              <button
                                type="button"
                                className=" rounded-r justify-center items-center flex p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 "
                              >
                                <span className="bg-[#E2E5F0] p-1 rounded-l">
                                  <PiDownloadSimple />
                                </span>
                                <span className="px-4 text-13">Pdf</span>{" "}
                              </button>
                            </td>
                            <td>
                              <TableAction />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center place-content-between mt-4">
                      <div className="mt-4 mb-2">
                        <p className="text-gray-600 ">
                          Showing 1 to 10 of 12 entries
                        </p>
                      </div>
                      <div className="flex">
                        <nav aria-label="Page navigation example border">
                          <ul className="flex list-style-none">
                            <li
                              className="border ltr:rounded-l rtl:rounded-r border-gray-100 "
                              disabled
                            >
                              <a
                                className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-100 hover:text-violet-500 focus:shadow-none hover:bg-gray-200 pointer-events-none "
                                href="#"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="border border-l-0 border-r-0 bg-[#5156BE] border-violet-500 group hover:border-gray-200 transition-all duration-300 ">
                              <a
                                className="page-link relative block py-2 px-3 border-0 group-hover bg-violet-500 outline-none text-white hover:text-violet-500 group-hover:bg-gray-200 focus:shadow-none transition-all duration-300 "
                                href="#"
                              >
                                1
                              </a>
                            </li>
                            <li className="border border-l-0 border-r-0 ">
                              <a
                                className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-500 hover:text-violet-500 hover:bg-gray-50/50 focus:shadow-none "
                                href="#"
                              >
                                2
                              </a>
                            </li>
                            <li className="border ltr:rounded-r rtl:rounded-l ">
                              <a
                                className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-500 hover:text-violet-500 hover:bg-gray-50/50 focus:shadow-none "
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
        </div>
      </div>
    </div>
  );
};

export default ManageImpactsTypes;
