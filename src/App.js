import Modal from "./ui-kits/Modal";
import { DashboardSideBar } from "./routesComponents/global/Navigation";
import React, { useState } from "react";
import { userConnectedRoutes } from "./dataRaws/routes";
import { Routes, Route } from "react-router-dom";
import DashboardHeader from "./routesComponents/Dashoboard/global/DashboardHeader";
import Dashboard from "./routes/DashboardHome";
import { Chatbubble } from "./assets/icons/Icons";

import "./assets/styles/default.css";
import "./assets/styles/app.css";
import "./assets/styles/modal.css";
import "./assets/styles/navigation.css";
import "./assets/styles/table.css";
import "./assets/styles/circle-percertange.css";
import "./assets/styles/components/dashboard/dashboardHome.css";
import "./assets/styles/components/dashboard/dashboardHeader.css";
import "./assets/styles/components/global/myChart.css";
import "./assets/styles/components/global/myMap.css";

function App() {
  const [userConnected, setUserConnected] = useState(true); // pour savoir si on a un utilisateur connceté

  return (
    <>
      <div className="App">
        <Modal />
        <main>
          {userConnected ? <DashboardSideBar /> : ""}
          {/* je choisis la barre de
          navigation en fonction du fait que la personne soit connectée */}
          {userConnected && <DashboardHeader />}
          {userConnected ? (
            <Routes>
              {userConnectedRoutes.map((item) => (
                <React.Fragment key={"Routes vers " + item.path}>
                  <Route path={item.path} element={item.element} />
                  <Route path="*" element={<Dashboard />} />
                </React.Fragment>
              ))}
            </Routes>
          ) : (
            ""
          )}
          <span className="chatBubble">
            <Chatbubble />
          </span>
          {/* les routes disponibles changeront en fonction du fait que la personne soit connectée */}
        </main>
      </div>
    </>
  );
}
export default App;
