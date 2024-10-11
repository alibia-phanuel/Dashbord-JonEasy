import SideBar from "../components/shares/SideBar";
import "./Responsive.css";
import Header from "../components/shares/Header";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { CgLoadbarAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import { FaAngleRight } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import Table from "../components/tableaction/Table";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const ManageBusinessLicences = () => {
  //Tabs bar
  const [activeTab, setActiveTab] = useState("Cameroun");
  const data = [
    {
      label: "Angola",
      value: "Angola",
      abbr: "AGO",
      flag: (
        <img
          src="https://flagcdn.com/w320/ao.png"
          alt="Drapeau de l'Angola"
          className="w-[20px]"
        />
      ),
      desc: "L'Angola est un pays d'Afrique centrale connu pour ses vastes ressources naturelles, notamment le pétrole et les diamants. La capitale, Luanda, est une ville portuaire dynamique sur la côte atlantique. L'Angola possède également une riche diversité culturelle avec des influences portugaises en raison de son passé colonial.",
    },
    {
      label: "Cameroun",
      value: "Cameroun",
      abbr: "CMR",
      flag: (
        <img
          src="https://flagcdn.com/w320/cm.png"
          alt="Drapeau du Cameroun"
          className="w-[20px]"
        />
      ),
      desc: <Table />,
    },
    {
      label: "République centrafricaine",
      value: "République centrafricaine",
      abbr: "CAF",
      flag: (
        <img
          src="https://flagcdn.com/w320/cf.png"
          alt="Drapeau de la République centrafricaine"
          className="w-[20px]"
        />
      ),
      desc: "La République centrafricaine est un pays enclavé d'Afrique centrale, riche en ressources naturelles comme les diamants, l'or, et le bois.",
    },
    {
      label: "Tchad",
      value: "Tchad",
      abbr: "TCD",
      flag: (
        <img
          src="https://flagcdn.com/w320/td.png"
          alt="Drapeau du Tchad"
          className="w-[20px]"
        />
      ),
      desc: "Le Tchad est un pays d'Afrique centrale caractérisé par ses vastes étendues désertiques et ses paysages diversifiés.",
    },
    {
      label: "République du Congo",
      value: "République du Congo",
      abbr: "COG",
      flag: (
        <img
          src="https://flagcdn.com/w320/cg.png"
          alt="Drapeau de la République du Congo"
          className="w-[20px]"
        />
      ),
      desc: "La République du Congo, souvent appelée Congo-Brazzaville, est un pays d'Afrique centrale avec de vastes forêts tropicales.",
    },
    {
      label: "République démocratique du Congo",
      value: "République démocratique du Congo",
      abbr: "COD",
      flag: (
        <img
          src="https://flagcdn.com/w320/cd.png"
          alt="Drapeau de la République démocratique du Congo"
          className="w-[20px]"
        />
      ),
      desc: "La République démocratique du Congo est l'un des plus grands pays d'Afrique centrale.",
    },
    {
      label: "Guinée équatoriale",
      value: "Guinée équatoriale",
      abbr: "GNQ",
      flag: (
        <img
          src="https://flagcdn.com/w320/gq.png"
          alt="Drapeau de la Guinée équatoriale"
          className="w-[20px]"
        />
      ),
      desc: "La Guinée équatoriale est un petit pays d'Afrique centrale composé d'une partie continentale et de plusieurs îles.",
    },
    {
      label: "Gabon",
      value: "Gabon",
      abbr: "GAB",
      flag: (
        <img
          src="https://flagcdn.com/w320/ga.png"
          alt="Drapeau du Gabon"
          className="w-[20px]"
        />
      ),
      desc: "Le Gabon est un pays d'Afrique centrale situé sur la côte atlantique.",
    },
    {
      label: "São Tomé-et-Príncipe",
      value: "São Tomé-et-Príncipe",
      abbr: "STP",
      flag: (
        <img
          src="https://flagcdn.com/w320/st.png"
          className="w-[20px]"
          alt="Drapeau de São Tomé-et-Príncipe"
        />
      ),
      desc: "São Tomé-et-Príncipe est un petit archipel situé dans le golfe de Guinée.",
    },
    {
      label: "Bénin",
      value: "Bénin",
      abbr: "BEN",
      flag: (
        <img
          src="https://flagcdn.com/w320/bj.png"
          alt="Drapeau du Bénin"
          className="w-[20px]"
        />
      ),
      desc: "Le Bénin est un pays d'Afrique de l'ouest situé sur la côte du golfe de Guinée.",
    },
    {
      label: "Burkina Faso",
      value: "Burkina Faso",
      abbr: "BFA",
      flag: (
        <img
          src="https://flagcdn.com/w320/bf.png"
          alt="Drapeau du Burkina Faso"
          className="w-[20px]"
        />
      ),
      desc: "Le Burkina Faso est un pays enclavé d'Afrique de l'ouest.",
    },
    {
      label: "Cap-Vert",
      value: "Cap-Vert",
      abbr: "CPV",
      flag: (
        <img
          src="https://flagcdn.com/w320/cv.png"
          alt="Drapeau du Cap-Vert"
          className="w-[20px]"
        />
      ),
      desc: "Le Cap-Vert est un archipel situé au large de la côte ouest de l'Afrique.",
    },
    {
      label: "Côte d'Ivoire",
      value: "Côte d'Ivoire",
      abbr: "CIV",
      flag: (
        <img
          src="https://flagcdn.com/w320/ci.png"
          alt="Drapeau de la Côte d'Ivoire"
          className="w-[20px]"
        />
      ),
      desc: "La Côte d'Ivoire est un pays d'Afrique de l'ouest.",
    },
    // Ajoutez les autres pays de la même manière.
  ];

  //Accirdion Action
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  //Modal One action
  const [modalopenone, setModalOpenOne] = useState(false);
  const handleModalOpenOne = () => setModalOpenOne(!modalopenone);
  //Modal Two action
  const [modalopentwo, setModalOpenTwo] = useState(false);
  const handleModalOpenTwo = () => setModalOpenTwo(!modalopentwo);
  //Modal Three action
  const [modalopenthree, setModalOpenThree] = useState(false);
  const handleModalOpenThree = () => setModalOpenThree(!modalopenthree);

  return (
    <div className="w-full flex body">
      <SideBar></SideBar>
      <div className="flex flex-col w-[calc(100%-4rem)]  overflow-hidden ">
        <div className="w-full">
          <Header />
        </div>
        <div className="px-4">
          <div className="flex  justify-between  items-center py-[15px] gap-2">
            {/**Dashboard header */}
            <div className="mb-sm-0 text-lg font-semibold grow text-gray-800">
              Gestion des licences
            </div>
            <div className=" flex gap-2  items-center">
              <div className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 cursor-pointer">
                Configurations
              </div>
              <div className="text-[#372C33]">
                <FaAngleRight />
              </div>
              <div className="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-500 hover:text-gray-900 ltr:md:ml-2 rtl:md:mr-2 cursor-pointer">
                Gestion des licences
              </div>
            </div>
          </div>

          <div className="flex  justify-center text-sm containes w-full gap-4 flex-wrap md:flex-nowrap">
            {/**  <!--Contenu d'enegistrement de données--> */}
            <div className="flex flex-col w-[500px] rounded-lg p-4 gap-y-4  border-[#e5e7eb] border">
              <div className=" flex flex-col gap-5 ">
                <div className="card-body pb-0">
                  <div className="flex flex-row item-center space-x-2">
                    <img
                      src="../src/assets/images/icons/rule-icon.png"
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                    <h4 className="text-15 pt-1 text-gray-700 ">
                      Créer un niveau de licence sur{" "}
                      <b className="text-indigo-600 font-bold">Jon Easy PRO</b>
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700  mb-2"
                        htmlFor="default-input"
                      >
                        Etiquette
                      </label>
                      <input
                        className="px-4  w-full placeholder:text-sm py-1.5 rounded border-gray-300 focus:border focus:border-violet-500 focus:ring-0  border  outline-none"
                        type="text"
                        id="default-input"
                        placeholder="Ex: Free, Flex, Access, Standard, Premium, Black Premium; etc."
                      />
                    </div>
                    <div className="mb-4 flex flex-row items-center space-x-3">
                      <div className="flex-1">
                        <label
                          className="block font-medium text-gray-700  mb-2"
                          htmlFor="default-input"
                        >
                          Prix annuel
                        </label>
                        <input
                          className="w-full  outline-none border placeholder:text-sm py-1.5 rounded pl-2 border-gray-300 focus:border focus:border-violet-500 focus:ring-0    "
                          type="number"
                          id="default-input"
                          placeholder="Ex: 680 000 FCFA"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          className="block font-medium text-gray-700  mb-2"
                          htmlFor="default-input"
                        >
                          Prix mensuel
                        </label>
                        <input
                          className="w-full outline-none placeholder:text-sm py-1.5 border rounded pl-2 border-gray-300 focus:border focus:border-violet-500 focus:ring-0    "
                          type="number"
                          id="default-input"
                          placeholder="Ex: 35 000 FCFA"
                        />
                      </div>
                    </div>
                    <div className="mb-4 text-justify text-gray-500 text-sm ">
                      Si les prix annuels et mensuels sont à{" "}
                      <b>zéro francs (0 Fcfa)</b>, préciser si les utilisateurs
                      de ce niveau de licence devront verser une commission pour
                      chaque de leur vente
                    </div>
                    <div className="mb-4">
                      <label
                        className="block font-medium text-gray-700  mb-2"
                        htmlFor="default-input"
                      >
                        Commission sur les ventes clients
                      </label>
                      <input
                        className="px-4 w-full py-1.5 resize-none placeholder:text-sm  rounded  focus:border focus:border-violet-500 border focus:ring-0  border-gray-300 outline-none "
                        type="text"
                        id="default-input"
                        placeholder="Ex: 1.8%"
                      ></input>
                    </div>
                    {/** <!--Accordions--> */}
                    <div className="">
                      <h6 className=" text-15 font-semibold my-8 ">
                        Propriétés et attributs de la licence
                      </h6>
                    </div>
                    <div className="card-body px-0 border mb-4 rounded-lg">
                      <Accordion open={open === 1}>
                        <AccordionHeader
                          onClick={() => handleOpen(1)}
                          className="pl-4 text-[16px] text-gray-700"
                        >
                          <div className="w-full flex justify-between items-center">
                            <div className="flex justify-center items-center gap-4">
                              <span> Propriétés principales</span>
                              {open === 1 ? (
                                <Button
                                  onClick={handleModalOpenOne}
                                  className="flex bg-[#5156be56] p-2 text-[#262b8e] items-center w-[80px] justify-center gap-1 capitalize"
                                >
                                  <FiPlus /> Ajouter
                                </Button>
                              ) : (
                                ""
                              )}
                            </div>
                            <div onClick={() => handleOpen(1)}>
                              {open === 1 ? <CgLoadbarAlt /> : <FiPlus />}
                            </div>
                          </div>
                        </AccordionHeader>
                        <AccordionBody className="pl-4">
                          We&apos;re not always in the position that we want to
                          be at. We&apos;re constantly growing. We&apos;re
                          constantly making mistakes. We&apos;re constantly
                          trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 2}>
                        <AccordionHeader
                          onClick={() => handleOpen(2)}
                          className="pl-4 text-[16px] text-gray-700 "
                        >
                          <div className=" w-full flex justify-between items-center">
                            <div className="flex justify-center items-center gap-4">
                              <span>Attributs de boostage de licence</span>
                              {open === 2 ? (
                                <Button
                                  onClick={handleModalOpenTwo}
                                  className="flex bg-[#5156be56] p-2 text-[#262b8e] items-center w-[80px] justify-center gap-1 capitalize"
                                >
                                  <FiPlus /> Ajouter
                                </Button>
                              ) : (
                                ""
                              )}
                            </div>
                            <div>
                              {open === 2 ? <CgLoadbarAlt /> : <FiPlus />}
                            </div>
                          </div>
                        </AccordionHeader>
                        <AccordionBody className="pl-4">
                          We&apos;re not always in the position that we want to
                          be at. We&apos;re constantly growing. We&apos;re
                          constantly making mistakes. We&apos;re constantly
                          trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 3}>
                        <AccordionHeader
                          onClick={() => handleOpen(3)}
                          className="pl-4 text-[16px] text-gray-700  flex justify-between"
                        >
                          <div className=" w-full flex justify-between items-center">
                            <div className="flex justify-center items-center gap-4">
                              <span>Limitation de niveau de licence</span>
                              {open === 3 ? (
                                <Button
                                  onClick={handleModalOpenThree}
                                  className="flex bg-[#5156be56] p-2 text-[#262b8e] items-center w-[80px] justify-center gap-1 capitalize"
                                >
                                  <FiPlus /> Ajouter
                                </Button>
                              ) : (
                                ""
                              )}
                            </div>

                            <div onClick={() => handleOpen(3)}>
                              {open === 3 ? <CgLoadbarAlt /> : <FiPlus />}
                            </div>
                          </div>
                        </AccordionHeader>
                        <AccordionBody className="pl-4 text-[16px] text-gray-700">
                          We&apos;re not always in the position that we want to
                          be at. We&apos;re constantly growing. We&apos;re
                          constantly making mistakes. We&apos;re constantly
                          trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                      </Accordion>
                    </div>

                    <div className="mb-4">
                      <div className="mb-3">
                        <label className="block font-medium mb-2 ">
                          Pays d`incidence
                        </label>
                        <select className=" w-full px-4 outline-none rounded border-gray-300 outli border bg-transparent py-2.5 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0 ">
                          {data.map((country) => (
                            <option key={country.abbr} value={country.abbr}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>
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
                <div className="card-body rounded-lg p-4">
                  <h6 className="mb-1 text-15 text-gray-700  font-semibold ">
                    Special title treatment
                  </h6>
                  <p className="text-[14px] text-gray-600">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <div className="mt-6">
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
            <Tabs
              value={activeTab}
              className="w-full border-gray-200  border rounded-lg "
            >
              <div className="p-4  text-[15px] font-semibold text-gray-700">
                Tabs with underline and icons
              </div>
              <TabsHeader
                className="rounded-none border-b overflow-hidden  border-blue-gray-50 bg-transparent p-0 "
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
                }}
              >
                <div className="flex   overflow-x-scroll py-4  ">
                  {data.map(({ label, flag, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={
                        activeTab === value ? "text-gray-900  " : "w-full"
                      }
                    >
                      <div className="  flex justify-center items-center gap-4 text-sm w-[280px]">
                        {flag}
                        <div>{label}</div>
                      </div>
                    </Tab>
                  ))}
                </div>
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
      <Dialog
        open={modalopenone}
        handler={handleModalOpenOne}
        className="relative bottom-[0%]"
      >
        <DialogHeader className="border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900  ">
            Ajouter une propriété principale à cette licence
          </h3>
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpenOne}
            className="mr-1 p-0"
          >
            <IoClose className="text-[25px] " />
          </Button>
        </DialogHeader>

        <DialogBody>
          {/**    <!--#modal-idextralargemodal_main--> */}
          {/** <!--Modal Body--> */}
          <div className="flex flex-col p-6 space-y-6 ltr:text-left rtl:text-right">
            <div className="pb-4 flex flex-row items-center space-x-2 border-b border-gray-300">
              <div className="flex-1">
                <div className="">
                  <label className="block font-medium text-gray-700  mb-2 text-[14px]">
                    Choisir la caractéristique à ajouter
                  </label>
                  <select className="w-full px-2 bg-transparent rounded border border-gray-300 py-2.5 outline-none text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0  ">
                    {data.map((country) => (
                      <option key={country.abbr} value={country.abbr}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="">
                <label
                  className="block font-medium text-gray-700 text-[14px]  mb-2"
                  htmlFor="default-input"
                >
                  Quelle est sa valeur
                </label>
                <input
                  className="w-full outline-none placeholder:text-sm py-1 rounded border-gray-300 border px-2 focus:border focus:border-violet-500 focus:ring-0   "
                  type="number"
                  id="default-input"
                  placeholder="Ex: 3000"
                />
              </div>

              <div className="">
                <div className="">
                  <label className="block font-medium text-gray-700  mb-2 text-[14px]">
                    Choisir en quoi est l`unité{" "}
                  </label>
                  <select className="w-full bg-transparent rounded border border-gray-300 px-2 py-2.5 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0  ">
                    <option value="%">Pourcentage</option>
                    <option value="$">Dévise</option>
                    <option value="£">Quantité</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="border-t border-gray-300">
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpenOne}
            className="mr-1"
          >
            <span>Desactivate</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleModalOpenOne}>
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/**modal 2 */}
      <Dialog
        open={modalopentwo}
        handler={handleModalOpenTwo}
        className="relative bottom-[0%]"
        size="lg"
      >
        <DialogHeader className="border-b flex justify-between items-center bg-yellow-300">
          <h3 className="text-xl font-semibold text-gray-900  ">
            Ajouter un attribut de boostage du niveau de cette licence
          </h3>
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpenTwo}
            className="mr-1 p-0"
          >
            <IoClose className="text-[25px] " />
          </Button>
        </DialogHeader>

        <DialogBody>
          {/**    <!--#modal-idextralargemodal_main--> */}
          {/** <!--Modal Body--> */}

          <div className="flex flex-col p-6 space-y-6 ltr:text-left rtl:text-right">
            <div className="pb-4 flex flex-row items-center space-x-2 border-b ">
              <div className=" flex-1">
                <div className="">
                  <label className="block font-medium text-gray-700  mb-2">
                    Choisir la caractéristique à ajouter
                  </label>
                  <select className="border-gray-200  border outline-none w-full rounded  py-2.5 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0  ">
                    {data.map((country) => (
                      <option key={country.abbr} value={country.abbr}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="">
                <label
                  className="block font-medium text-gray-700  mb-2"
                  htmlFor="default-input"
                >
                  Quantité boostante
                </label>
                <input
                  className="w-full placeholder:text-sm py-2 rounded  focus:border focus:border-violet-500 focus:ring-0   border-gray-200  border outline-none px-2"
                  type="number"
                  id="default-input"
                  placeholder="Ex: 1 800"
                />
              </div>
              <div className="">
                <label
                  className="block font-medium text-gray-700  mb-2"
                  htmlFor="default-input"
                >
                  Prix de souscription
                </label>
                <input
                  className="w-full border-gray-200  border outline-none px-2 placeholder:text-sm py-2 rounded  focus:border focus:border-violet-500 focus:ring-0   "
                  type="number"
                  id="default-input"
                  placeholder="Ex: 3 000 FCFA"
                />
              </div>

              <div className="">
                <div className="">
                  <label className="block font-medium text-gray-700  mb-2">
                    Périodicité du booster
                  </label>
                  <select className="border-gray-200 outline-none border w-full rounded  py-2.5 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0  ">
                    <option value="ANNUAL">Valable 1 an</option>
                    <option value="MONTHLY">Valable 1 mois</option>
                    <option value="WEEKLY">Valable 1 semaine</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="border-t border-gray-300">
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpenTwo}
            className="mr-1"
          >
            <span>Desactivate</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleModalOpenTwo}>
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/**modal 3 */}

      <Dialog
        open={modalopenthree}
        handler={handleModalOpenThree}
        className="relative bottom-[0%]"
      >
        <DialogHeader className="border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900  ">
            Ajouter une propriété limite au niveau Business de la licence
          </h3>
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpenThree}
            className="mr-1 p-0"
          >
            <IoClose className="text-[25px] " />
          </Button>
        </DialogHeader>

        <DialogBody>
          {/**    <!--#modal-idextralargemodal_main--> */}
          {/** <!--Modal Body--> */}
          <div className="p-6 space-y-6 ltr:text-left rtl:text-right">
            <p className="text-base leading-relaxed text-gray-700  ">
              Beautifully designed, expertly crafted components that follow all
              accessibility best practices and are easy to customize.
            </p>
            <p className="text-base leading-relaxed text-gray-700  ">
              Interactive examples for React and Vue powered by Headless UI,
              plus vanilla HTML if you’d rather write any necessary JS
              yourself.Every example is fully responsive and carefully designed
              and implemented to look great at any screen size.
            </p>
          </div>
        </DialogBody>
        <DialogFooter className="border-t border-gray-300">
          <Button
            variant="text"
            color="red"
            onClick={handleModalOpenThree}
            className="mr-1"
          >
            <span>Desactivate</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleModalOpenThree}
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ManageBusinessLicences;
