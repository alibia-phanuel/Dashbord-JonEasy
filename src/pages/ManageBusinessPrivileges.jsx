import SideBar from "../components/shares/SideBar";
import Header from "../components/shares/Header";
import { FaAngleRight } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { PiDownloadSimple } from "react-icons/pi";
import { RiDownloadFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import TableAction from "../components/tableaction/TableAction";
import p1 from "../assets/images/small/img-7.jpg";
import p2 from "../assets/images/small/img-2.jpg";
import p3 from "../assets/images/small/img-6.jpg";
import p4 from "../assets/images/small/img-1.jpg";
const ManageBusinessPrivileges = () => {
  return (
    <div className="w-[calc(100%-4rem)] flex">
      <SideBar></SideBar>
      <div className="w-full h-screen flex  flex-col  ">
        <div className="  w-full">
          <Header />
        </div>
        <div className="px-4">
          <div className="flex  justify-between  items-center py-[15px] gap-2">
            {/**Dashboard header */}
            <div className="font-bold text-lg text-[#2A3661]">
              Gestion des Privilèges business
            </div>
            <div className=" flex gap-2  items-center">
              <div className="font-semibold text-[#372C33] cursor-pointer max-sm:hidden">
                Apps
              </div>
              <div className="text-[#372C33]">
                <FaAngleRight />
              </div>
              <div className="text-[#989698] cursor-pointer hover:text-[#372C33]  duration-300">
                Gestion des Privilèges business
              </div>
            </div>
          </div>

          <div className="flex gap-4  flex-wrap md:flex-nowrap justify-center  w-full">
            {/**  <!--Contenu d'enegistrement de données--> */}
            <div className="left flex flex-col gap-4 ">
              <div className="border-[#e5e7eb] border rounded-lg    flex flex-col gap-5 p-4">
                <div className="card-body pb-0">
                  <div className="flex flex-row item-center space-x-2">
                    <img
                      src="../src/assets/images/icons/rule-icon.png"
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                    <h4 className="text-15 pt-1 text-gray-700 text-lg font-bold">
                      Nouveau privilège{" "}
                      <b className="text-indigo-600 font-bold">Jon Easy PRO</b>
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <div className="mb-3">
                        <label className="block font-medium text-gray-700 text-[14px]  mb-2">
                          Sélectionner le rôle du privilège
                        </label>
                        <select className="w-full rounded border border-gray-300  py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0 outline-none ">
                          <option>Gérant(manager)</option>
                          <option>Magasinier</option>
                          <option>Serveur</option>
                          <option>Caissier</option>
                          <option>Comptable</option>
                          <option>Validateur paiements clients</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700 text-[14px] mb-2"
                        htmlFor="default-input"
                      >
                        Nom de traductible du libelé
                      </label>
                      <input
                        className="px-4 w-full placeholder:text-sm py-1.5 rounded border-gray-300 focus:border focus:border-violet-500 focus:ring-0  border  outline-none"
                        type="text"
                        id="default-input"
                        placeholder="Se referer au manifest. Feuille Gestion Privilèges"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700 text-[14px]  mb-2"
                        htmlFor="default-input"
                      >
                        Code de permission
                      </label>
                      <input
                        className="px-4 w-full placeholder:text-sm py-1.5 rounded border-gray-300 focus:border focus:border-violet-500 focus:ring-0  border  outline-none"
                        type="number"
                        id="default-input"
                        placeholder="Se referer au manifest. Feuille Gestion Privilèges"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700 text-[14px] mb-2"
                        htmlFor="default-input"
                      >
                        Description traductible du rôle
                      </label>
                      <textarea
                        className="px-4 w-full h-14 resize-none placeholder:text-sm py-1.5 rounded  focus:border focus:border-violet-500 border focus:ring-0  border-gray-300 outline-none "
                        type="text"
                        id="default-input"
                        placeholder="Se referer au manifest. Feuille Gestion Privilèges"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn text-red-500 text-[14px] hover:text-white border py-2 rounded-lg transition-all border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:text-white focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600 w-full"
                    >
                      Ajouter le privilège
                    </button>
                  </form>
                </div>
              </div>
              {/**Rechercher un role précis*/}
              <div className="card    border-gray-300 border p-4    rounded-lg overflow-hidden ">
                <div className="card-body ">
                  <div className="search-box">
                    <h5 className="mb-3 text-gray-700 font-bold text-lg ">
                      Rechercher un role précis
                    </h5>
                    <div className="relative px-2 flex justify-center border-gray-300 border  rounded  items-center bg-gray-50/50">
                      <IoSearchOutline className=" text-[25px]" />
                      <input
                        type="text"
                        className="w-full border-transparent  rounded pl-2  placeholder:text-13 text-gray-700 placeholder:text-gray-400 py-2  outline-none"
                        placeholder="Saisir code ou libélé traductible..."
                      />
                    </div>
                  </div>
                  <div className="mt-12">
                    <h5 className="mb-4 text-gray-700 text-lg font-bold ">
                      Rôles systèmes configurés
                    </h5>
                    <ul className="list-unstyled font-medium px-2 text-[14px]">
                      <li className="flex">
                        <a
                          href="#"
                          className="text-gray-900 pb-4 border-gray  w-full flex justify-between items-center border-b  "
                        >
                          <span>Design</span>
                          <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1  ">
                            02
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-900 pb-4   border-gray  w-full flex justify-between items-center border-b  "
                        >
                          <span>Development </span>
                          <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left ms-1 text-xs py-0.5 px-1  ">
                            04
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-900 pb-4   border-gray  w-full flex justify-between items-center border-b  "
                        >
                          <span>Business</span>
                          <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1  ">
                            12
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-900 pb-4   border-gray  w-full flex justify-between items-center border-b  "
                        >
                          <span> Project</span>
                          <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1  ">
                            08
                          </span>
                        </a>
                      </li>
                      <li className="flex  justify-center items-center">
                        <a
                          href="#"
                          className="text-gray-900 pb-4    border-gray  w-full flex justify-between items-center border-b"
                        >
                          <span> Travel</span>
                          <span className="bg-violet-50/50 text-violet-500  rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-xs py-0.5 px-1  ">
                            10
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h5 className="text-gray-700 text-lg font-bold ">
                      Points de vente les plus personnalisées
                    </h5>
                    <div className="list-group py-2">
                      <a href="#" className="pt-0 px-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 ltr:mr-4 rtl:ml-4">
                            <img
                              src={p1}
                              alt=""
                              className="w-12 h-12 rounded-full mr-4"
                            />
                          </div>
                          <div className="flex-grow text-[14px]">
                            <h5 className="text-13 text-gray-700  ">
                              Cave Paul St. Denis
                            </h5>
                            <p className="mb-0 mt-1 text-gray-500 ">
                              +20 profils{" "}
                              <span className="">/ CAMEROUN (Douala)</span>
                            </p>
                          </div>
                          <div className="text-4xl text-gray-500 ">
                            <i className="mdi mdi-calendar"></i>
                          </div>
                        </div>
                      </a>
                      <hr className="border-gray-300" />
                      <a href="#" className="px-2">
                        <div className="flex items-center ">
                          <div className="flex-shrink-0 ltr:mr-4 rtl:ml-4">
                            <img
                              src={p2}
                              alt=""
                              className="w-12 h-12 rounded-full mr-4"
                            />
                          </div>
                          <div className="flex-grow text-[14px]">
                            <h5 className="text-13 text-gray-700  ">
                              The Kingdom VIP
                            </h5>
                            <p className="mb-0 mt-1 text-gray-500 ">
                              +17 profils{" "}
                              <span className="">
                                / Cote d`Ivoire (Abidjan)
                              </span>
                            </p>
                          </div>
                          <div className="text-4xl text-gray-500 ">
                            <i className="mdi mdi-calendar"></i>
                          </div>
                        </div>
                      </a>
                      <hr className="border-gray-300" />
                      <a href="#" className="px-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 ltr:mr-4 rtl:ml-4">
                            <img
                              src={p3}
                              alt=""
                              className="w-12 h-12 rounded-full mr-4"
                            />
                          </div>
                          <div className="flex-grow text-[14px]">
                            <h5 className="text-13 text-gray-700  ">
                              Las Vegas
                            </h5>
                            <p className="mb-0 mt-1 text-gray-500 ">
                              +14 profils{" "}
                              <span className="">/ CAMEROUN (Douala)</span>
                            </p>
                          </div>
                          <div className="text-4xl text-gray-500 ">
                            <i className="mdi mdi-calendar"></i>
                          </div>
                        </div>
                      </a>
                      <hr className="border-gray-300" />
                      <a href="#" className="px-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 ltr:mr-4 rtl:ml-4">
                            <img
                              src={p4}
                              alt=""
                              className="w-12 h-12 rounded-full mr-4"
                            />
                          </div>
                          <div className="flex-grow text-[14px]">
                            <h5 className="text-13 text-gray-700  ">
                              OPIOM Gold
                            </h5>
                            <p className="mb-0 mt-1 text-gray-500 ">
                              +10 profils{" "}
                              <span className="">/ CAMEROUN (Douala)</span>
                            </p>
                          </div>
                          <div className="text-4xl text-gray-500 ">
                            <i className="mdi mdi-calendar"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/**code de permission */}
              <div className="border-gray-300 border rounded-lg overflow-hidden ">
                <div className="card-header border-b border-gray-50 p-5  bg-indigo-50 ">
                  <div className="flex flex-row items-center space-x-2">
                    <h5 className="uppercase text-gray-600 flex-1 font-normal">
                      Code de permission
                    </h5>
                    <h5 className="uppercase text-gray-600 font-bold">4053</h5>
                  </div>
                </div>
                <div className="card-body   rounded-lg p-4">
                  <h6 className="mb-1 text-15 text-gray-700  font-semibold ">
                    Special title treatment
                  </h6>
                  <p className="card-text text-gray-600">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="btn flex justify-center items-center gap-2 text-white bg-red-500 border-red-500 p-2 rounded-lg  hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600"
                    >
                      <CiCircleRemove className="text-[25px]" />
                      <span className="align-middle">Supprimer ce rôle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**<!--Contenu de tableau de donnees--> */}
            <div className="mb-0  border-[#e5e7eb] border   rounded-lg p-4 w-full">
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
                      <table className="w-full text-[14px]">
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
                          <tr className="border-b border-gray-50  text-gray-600 bg-indigo-50">
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
                                className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-200 hover:text-violet-500 focus:shadow-none hover:bg-gray-200 pointer-events-none "
                                href="#"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="border border-l-0 border-r-0 border-violet-500 group hover:border-gray-200 transition-all duration-300 ">
                              <a
                                className="page-link bg-[#5156BE]  relative block py-2 px-3 border-0 group-hover bg-violet-500 outline-none text-white hover:text-violet-500 group-hover:bg-gray-200 focus:shadow-none transition-all duration-300 "
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

export default ManageBusinessPrivileges;
