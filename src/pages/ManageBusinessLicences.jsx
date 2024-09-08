import SideBar from "../components/shares/SideBar";
import "./Responsive.css";
import Header from "../components/shares/Header";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { CgLoadbarAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { LuGanttChartSquare } from "react-icons/lu";
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
      flag: <LuGanttChartSquare />,
      desc: "L'Angola est un pays d'Afrique centrale connu pour ses vastes ressources naturelles, notamment le pétrole et les diamants. La capitale, Luanda, est une ville portuaire dynamique sur la côte atlantique. L'Angola possède également une riche diversité culturelle avec des influences portugaises en raison de son passé colonial.",
    },
    {
      label: "Cameroun",
      value: "Cameroun",
      abbr: "CMR",
      flag: <LuGanttChartSquare />,
      desc: <Table />,
    },
    {
      label: "République centrafricaine",
      value: "République centrafricaine",
      abbr: "CAF",
      flag: <LuGanttChartSquare />,
      desc: "La République centrafricaine est un pays enclavé d'Afrique centrale, riche en ressources naturelles comme les diamants, l'or, et le bois. Cependant, elle est marquée par des conflits internes et une instabilité politique persistante. La capitale, Bangui, est située sur les rives de la rivière Oubangui.",
    },
    {
      label: "Tchad",
      value: "Tchad",
      abbr: "TCD",
      flag: <LuGanttChartSquare />,
      desc: "Le Tchad est un pays d'Afrique centrale caractérisé par ses vastes étendues désertiques et ses paysages diversifiés allant des montagnes du Tibesti au nord aux zones humides du sud. N'Djaména, la capitale, est le centre politique et économique du pays.",
    },
    {
      label: "République du Congo",
      value: "République du Congo",
      abbr: "COG",
      flag: <LuGanttChartSquare />,
      desc: "La République du Congo, souvent appelée Congo-Brazzaville, est un pays d'Afrique centrale avec de vastes forêts tropicales et une riche biodiversité. Brazzaville, sa capitale, est située sur le fleuve Congo, juste en face de Kinshasa, la capitale de la République démocratique du Congo.",
    },
    {
      label: "République démocratique du Congo",
      value: "République démocratique du Congo",
      abbr: "COD",
      flag: <LuGanttChartSquare />,
      desc: "La République démocratique du Congo, également appelée RDC, est l'un des plus grands pays d'Afrique centrale. Elle est dotée de vastes ressources naturelles, notamment des minerais précieux. Kinshasa, la capitale, est une des plus grandes villes d'Afrique.",
    },
    {
      label: "Guinée équatoriale",
      value: "Guinée équatoriale",
      abbr: "GNQ",
      flag: <LuGanttChartSquare />,
      desc: "La Guinée équatoriale est un petit pays d'Afrique centrale composé d'une partie continentale et de plusieurs îles. Malabo, la capitale, est située sur l'île de Bioko. Le pays est l'un des principaux producteurs de pétrole en Afrique subsaharienne.",
    },
    {
      label: "Gabon",
      value: "Gabon",
      abbr: "GAB",
      flag: <LuGanttChartSquare />,
      desc: "Le Gabon est un pays d'Afrique centrale situé sur la côte atlantique, connu pour ses vastes parcs nationaux et sa biodiversité exceptionnelle. Libreville, la capitale, est une ville moderne avec une forte influence française.",
    },
    {
      label: "São Tomé-et-Príncipe",
      value: "São Tomé-et-Príncipe",
      abbr: "STP",
      flag: <LuGanttChartSquare />,
      desc: "São Tomé-et-Príncipe est un petit archipel situé dans le golfe de Guinée, au large de la côte ouest de l'Afrique centrale. Le pays est connu pour ses plages magnifiques, ses forêts tropicales et son atmosphère paisible. São Tomé est la capitale et la plus grande ville.",
    },
    {
      label: "Bénin",
      value: "Bénin",
      abbr: "BEN",
      flag: <LuGanttChartSquare />,
      desc: "Le Bénin est un pays d'Afrique de l'ouest situé sur la côte du golfe de Guinée. Il est reconnu pour son histoire liée au royaume du Dahomey et pour être le berceau du vaudou. Porto-Novo est la capitale officielle, mais Cotonou est la plus grande ville et le centre économique.",
    },
    {
      label: "Burkina Faso",
      value: "Burkina Faso",
      abbr: "BFA",
      flag: <LuGanttChartSquare />,
      desc: "Le Burkina Faso est un pays enclavé d'Afrique de l'ouest, connu pour ses paysages désertiques et ses traditions culturelles riches. Ouagadougou, la capitale, est le cœur politique et culturel du pays.",
    },
    {
      label: "Cap-Vert",
      value: "Cap-Vert",
      abbr: "CPV",
      flag: <LuGanttChartSquare />,
      desc: "Le Cap-Vert est un archipel situé au large de la côte ouest de l'Afrique, connu pour ses plages, ses montagnes volcaniques et sa culture créole. Praia est la capitale et la plus grande ville.",
    },
    {
      label: "Côte d'Ivoire",
      value: "Côte d'Ivoire",
      abbr: "CIV",
      flag: <LuGanttChartSquare />,
      desc: "La Côte d'Ivoire, située en Afrique de l'ouest, est un pays avec une économie dynamique, particulièrement connue pour sa production de cacao. Abidjan est la plus grande ville et un important centre économique, tandis que Yamoussoukro est la capitale politique.",
    },
    {
      label: "Gambie",
      value: "Gambie",
      abbr: "GMB",
      flag: <LuGanttChartSquare />,
      desc: "La Gambie est le plus petit pays d'Afrique continentale, bordé par le Sénégal et l'océan Atlantique. Banjul, la capitale, est une ville côtière avec un riche patrimoine colonial.",
    },
    {
      label: "Ghana",
      value: "Ghana",
      abbr: "GHA",
      flag: <LuGanttChartSquare />,
      desc: "Le Ghana est un pays d'Afrique de l'ouest avec une économie en croissance rapide, soutenue par ses exportations de cacao, d'or et de pétrole. Accra, la capitale, est une ville animée sur la côte atlantique.",
    },
    {
      label: "Guinée",
      value: "Guinée",
      abbr: "GIN",
      flag: <LuGanttChartSquare />,
      desc: "La Guinée est un pays d'Afrique de l'ouest connu pour ses ressources minières, notamment la bauxite. Conakry, la capitale, est un port important sur l'océan Atlantique.",
    },
    {
      label: "Guinée-Bissau",
      value: "Guinée-Bissau",
      abbr: "GNB",
      flag: <LuGanttChartSquare />,
      desc: "La Guinée-Bissau est un petit pays d'Afrique de l'ouest, avec un archipel de plus de 80 îles. Bissau, la capitale, est située sur la côte, et le pays est connu pour sa culture riche et son histoire de commerce maritime.",
    },
    {
      label: "Liberia",
      value: "Liberia",
      abbr: "LBR",
      flag: <LuGanttChartSquare />,
      desc: "Le Liberia est un pays d'Afrique de l'ouest fondé par des Afro-Américains libres au XIXe siècle. Monrovia, la capitale, porte le nom du président américain James Monroe, et le pays a une riche histoire liée à son origine unique.",
    },
    {
      label: "Mali",
      value: "Mali",
      abbr: "MLI",
      flag: <LuGanttChartSquare />,
      desc: "Le Mali est un grand pays enclavé d'Afrique de l'ouest, connu pour son histoire ancienne liée à l'empire du Mali et à la ville légendaire de Tombouctou. Bamako, la capitale, est un centre culturel et économique du pays.",
    },
    {
      label: "Mauritanie",
      value: "Mauritanie",
      abbr: "MRT",
      flag: <LuGanttChartSquare />,
      desc: "La Mauritanie est un pays d'Afrique de l'ouest avec une grande partie de son territoire couvert par le désert du Sahara. Nouakchott, la capitale, est située sur la côte Atlantique.",
    },
    {
      label: "Niger",
      value: "Niger",
      abbr: "NER",
      flag: <LuGanttChartSquare />,
      desc: "Le Niger est un pays enclavé d'Afrique de l'ouest, connu pour ses vastes étendues désertiques. Niamey, la capitale, est située au bord du fleuve Niger, et le pays est riche en culture et histoire, malgré les défis liés au climat aride.",
    },
    {
      label: "Nigeria",
      value: "Nigeria",
      abbr: "NGA",
      flag: <LuGanttChartSquare />,
      desc: "Le Nigeria est le pays le plus peuplé d'Afrique, avec une économie diversifiée comprenant le pétrole, les finances et les technologies. Abuja, la capitale, est située dans le centre du pays, tandis que Lagos est le principal centre économique et commercial.",
    },
    {
      label: "Sénégal",
      value: "Sénégal",
      abbr: "SEN",
      flag: <LuGanttChartSquare />,
      desc: "Le Sénégal est un pays d'Afrique de l'ouest connu pour sa culture vivante, sa musique, et son histoire coloniale. Dakar, la capitale, est une ville portuaire dynamique sur la côte Atlantique.",
    },
    {
      label: "Sierra Leone",
      value: "Sierra Leone",
      abbr: "SLE",
      flag: <LuGanttChartSquare />,
      desc: "La Sierra Leone est un pays d'Afrique de l'ouest avec des plages magnifiques et une histoire marquée par la traite des esclaves. Freetown, la capitale, est une ville côtière avec une riche histoire coloniale.",
    },
    {
      label: "Togo",
      value: "Togo",
      abbr: "TGO",
      flag: <LuGanttChartSquare />,
      desc: "Le Togo est un petit pays d'Afrique de l'ouest avec une diversité culturelle notable et des plages côtières. Lomé, la capitale, est un important centre économique et portuaire.",
    },
    {
      label: "Algérie",
      value: "Algérie",
      abbr: "DZA",
      flag: <LuGanttChartSquare />,
      desc: "L'Algérie est un pays d'Afrique du Nord avec une grande partie de son territoire couverte par le désert du Sahara. Alger, la capitale, est une ville méditerranéenne avec une riche histoire culturelle et une architecture historique.",
    },
    {
      label: "Égypte",
      value: "Égypte",
      abbr: "EGY",
      flag: <LuGanttChartSquare />,
      desc: "L'Égypte est un pays d'Afrique du Nord célèbre pour ses monuments anciens comme les pyramides de Gizeh et les temples de Louxor. Le Caire, la capitale, est une grande ville avec un riche patrimoine historique et culturel.",
    },
    {
      label: "Libye",
      value: "Libye",
      abbr: "LBY",
      flag: <LuGanttChartSquare />,
      desc: "La Libye est un pays d'Afrique du Nord avec une grande partie de son territoire désertique. Tripoli, la capitale, est située sur la côte méditerranéenne, et le pays a une riche histoire antique et islamique.",
    },
    {
      label: "Maroc",
      value: "Maroc",
      abbr: "MAR",
      flag: <LuGanttChartSquare />,
      desc: "Le Maroc est un pays d'Afrique du Nord connu pour ses paysages variés, allant des plages méditerranéennes aux montagnes de l'Atlas. Rabat est la capitale politique, tandis que Casablanca est le principal centre économique.",
    },
    {
      label: "Maurice",
      value: "Maurice",
      abbr: "MUS",
      flag: <LuGanttChartSquare />,
      desc: "L'île Maurice est un petit pays insulaire situé dans l'océan Indien, connu pour ses plages paradisiaques et son environnement naturel préservé. Port-Louis, la capitale, est le principal centre commercial et culturel de l'île.",
    },
    {
      label: "Soudan",
      value: "Soudan",
      abbr: "SDN",
      flag: <LuGanttChartSquare />,
      desc: "Le Soudan est un pays d'Afrique du Nord-Est avec une histoire ancienne riche, notamment liée aux civilisations nubiennes. Khartoum, la capitale, est située à la confluence des rivières Nil Bleu et Nil Blanc.",
    },
    {
      label: "Soudan du Sud",
      value: "Soudan du Sud",
      abbr: "SSD",
      flag: <LuGanttChartSquare />,
      desc: "Le Soudan du Sud est le plus jeune pays d'Afrique, ayant obtenu son indépendance du Soudan en 2011. Juba, la capitale, est un centre administratif et économique dans un contexte de défis politiques et économiques.",
    },
    {
      label: "Syrie",
      value: "Syrie",
      abbr: "SYR",
      flag: <LuGanttChartSquare />,
      desc: "La Syrie est un pays du Moyen-Orient avec une histoire ancienne riche, incluant des sites archéologiques importants comme Palmyre. Damas est la capitale, mais le pays est actuellement marqué par un conflit prolongé et une instabilité.",
    },
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
