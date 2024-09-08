import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ManageSystemRules from "./pages/ManageSystemRules";
import ManageBusinessRules from "./pages/ManageBusinessRules";
import ManageSystemPrivileges from "./pages/ManageSystemPrivileges";
import ManageBusinessPrivileges from "./pages/ManageBusinessPrivileges";
import ManageSystemProfils from "./pages/ManageSystemProfils";
import ManageBusinessProfils from "./pages/ManageBusinessProfils";
import ManageUsersAccounts from "./pages/ManageUsersAccounts";
import ManageSystemGroups from "./pages/ManageSystemGroups";
import ManageLicencesProperties from "./pages/ManageLicencesProperties";
import ManageImpactsTypes from "./pages/ManageImpactsTypes";
import ManageBusinessLicences from "./pages/ManageBusinessLicences";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/ManageSystemRules" element={<ManageSystemRules />} />
          <Route
            path="/ManageBusinessRules"
            element={<ManageBusinessRules />}
          />
          <Route
            path="/ManageSystemPrivileges"
            element={<ManageSystemPrivileges />}
          />
          <Route
            path="/ManageBusinessPrivileges"
            element={<ManageBusinessPrivileges />}
          />

          <Route
            path="/ManageSystemProfils"
            element={<ManageSystemProfils />}
          />

          <Route
            path="/ManageBusinessProfils"
            element={<ManageBusinessProfils />}
          />

          <Route
            path="/ManageUsersAccounts"
            element={<ManageUsersAccounts />}
          />

          <Route path="/ManageSystemGroups" element={<ManageSystemGroups />} />

          <Route path="/ManageImpactsTypes" element={<ManageImpactsTypes />} />

          <Route
            path="/ManageLicencesProperties"
            element={<ManageLicencesProperties />}
          />
          {/**suite en desous */}
          <Route
            path="/ManageBusinessLicences"
            element={<ManageBusinessLicences />}
          />
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
