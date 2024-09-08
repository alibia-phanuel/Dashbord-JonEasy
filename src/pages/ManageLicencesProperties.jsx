import SideBar from "../components/shares/SideBar";
import Header from "../components/shares/Header";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { LuGanttChartSquare } from "react-icons/lu";
import Table from "../components/tableaction/Table";
import { CiCircleRemove } from "react-icons/ci";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const ManageLicencesProperties = () => {
  //Tabs bar
  const [activeTab, setActiveTab] = useState("Caractéristiques principales");
  const data = [
    {
      label: "Caractéristiques principales",
      value: "Caractéristiques principales",
      icone: <LuGanttChartSquare />,
      desc: `"Caractéristiques principales" est souvent utilisée dans le contexte de
       fiches produits, de manuels techniques, ou de descriptions commerciales pour
        introduire les aspects les plus importants ou distinctifs d'un produit ou 
        d'un service. Cette phrase signifie que les informations qui suivent sont les éléments clés ou les spécifications essentielles que les utilisateurs ou clients doivent connaître.`,
    },
    {
      label: "Caractéristiques de boostage",
      icone: <LuGanttChartSquare />,
      value: "Caractéristiques de boostage",
      desc: <Table />,
    },
    {
      label: "Caractéristiques de restrictions",
      icone: <LuGanttChartSquare />,
      value: "Caractéristiques de restrictions",

      desc: `"Caractéristiques de restrictions" fait référence aux limitations ou 
      contraintes spécifiques associées à un produit, un service, ou un système.
       Contrairement aux "Caractéristiques principales" qui mettent en avant les 
       avantages ou aspects clés, les "Caractéristiques de restrictions" soulignent 
       ce que le produit ou service ne peut pas faire,
       les conditions d'utilisation, ou les limites techniques.`,
    },
  ];
  return (
    <div className="w-full  flex">
      <SideBar></SideBar>
      <div className=" h-screen flex  flex-col  w-[calc(100%-4rem)]">
        <div className="w-full">
          <Header />
        </div>
        <div className="px-4">
          <div className="flex  justify-between  items-center py-[15px] gap-2">
            {/**Dashboard header */}
            <div className="mb-sm-0 text-lg font-semibold grow text-gray-800">
              Gestion des propriétés de licences
            </div>
            <div className=" flex gap-2  items-center">
              <div className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 cursor-pointer">
                Configurations
              </div>
              <div className="text-[#372C33]">
                <FaAngleRight />
              </div>
              <div className="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-500 hover:text-gray-900 ltr:md:ml-2 rtl:md:mr-2 cursor-pointer">
                Gestion des propriétés de licences
              </div>
            </div>
          </div>

          <div className="flex gap-4  flex-wrap md:flex-nowrap   w-full text-sm">
            {/**  <!--Contenu d'enegistrement de données--> */}
            <div className="left flex flex-col gap-4 max-md:w-full ">
              <div className="border-[#e5e7eb] border rounded-lg    flex flex-col gap-5 p-4">
                <div className="card-body pb-0">
                  <div className="flex flex-row item-center space-x-2">
                    <img
                      src="../src/assets/images/icons/rule-icon.png"
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                    <h4 className="text-15 pt-1 text-gray-700 ">
                      Nouvelle propriétés de licence{" "}
                      <b className="text-indigo-600 font-bold">Jon Easy PRO</b>{" "}
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="block font-medium text-gray-700 mb-2">
                        Nature de la caratéristique
                      </label>
                      <select className="pl-2  border w-full outline-none rounded border-gray-300 py-2.5 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0 ">
                        <option value="MAIN">Caractéristique principale</option>
                        <option value="BOOSTER">
                          Caractéristique boostage
                        </option>
                        <option value="RESTRICTION">
                          Caractéristique de restriction
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <div className="mb-3">
                        <label className="block font-medium text-gray-700 mb-2">
                          Sur quoi impacte cette caracteristique
                        </label>
                        <select className=" w-full outline-none rounded border-gray-300 border py-2.5 pl-2 text-sm text-indigo-700 font-bold focus:border focus:border-violet-500 focus:ring-0 ">
                          <option
                            value="df5e5656eazr454zar"
                            title="Description"
                          >
                            impact-on-order
                          </option>
                          <option value="z45rza6445rza44za">impact-xxxx</option>
                          <option value="fe5f47ef25f86eafc586b">
                            impact-yyyyyy
                          </option>
                          <option value="fe5f47ef25f86eafc536b">
                            impact-fqfqfqs
                          </option>
                        </select>
                      </div>
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
                        placeholder="Se referer au manifest. Feuille Gestion Licences"
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
                      TYPE:
                    </h5>
                    <h5 className="uppercase text-gray-600 font-bold">
                      impact-on-order
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
                  <div className="mt-6">
                    <button
                      type="button"
                      className="btn flex justify-center items-center gap-2 text-white bg-[#FD625E] border-[#FD625E] p-2 rounded-lg  hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-500/30 active:bg-red-600 active:border-red-600"
                    >
                      <CiCircleRemove className="text-[25px]" />
                      <span className="align-middle">
                        Supprimer cette propriété de licence
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
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0  "
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
                }}
              >
                <div className=" w-[50%] flex">
                  {data.map(({ label, icone, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={
                        activeTab === value ? "text-gray-900  " : "w-full"
                      }
                    >
                      <div className=" flex justify-center items-center gap-2 w-[300px]">
                        <div>{icone}</div>
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
    </div>
  );
};

export default ManageLicencesProperties;
