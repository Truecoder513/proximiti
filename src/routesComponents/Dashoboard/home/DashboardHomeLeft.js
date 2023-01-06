import React, { useState } from "react";
import { AccountFonctionnality } from "../../../dataRaws/AccountFonctionnality";
import { fournitures, stocks } from "../../../dataRaws/CardData";
import { userActivities } from "../../../dataRaws/ChartData";
import { Circlepercertange } from "../../../ui-kits/Circlepercertange";
import { Card } from "../../../ui-kits/kits";
import MyChart from "../../global/MyChart";
import MyMap from "../../global/MyMap";

const DashboardHomeLeft = () => {
  const [onBordPercertange, setOnBordPercertange] = useState(76);
  return (
    <section>
      <div className="last-connexion">Dernière Connexion : 21/11/21</div>
      <div className="dh-account-data">
        <MyChart chartTitle={"Activités"} chartData={userActivities} />
        <div>
          <p>Client Onboarding</p>
          <Circlepercertange percertange={onBordPercertange} />
        </div>
      </div>
      <MyMap
        gpsCoordinates={[6.366667, 2.433333]}
        height={170 + "px"}
        mapInfo={
          <>
            <p>8 rue Rossini, 37200 Tours</p>
            <p>Etage: 1</p>
            <p>Digicode</p>
            <p>abro.landry@mail.com</p>
            <p>Propriétaire ou locataire</p>
          </>
        }
      />
      <div className="dh-fonction">
        {AccountFonctionnality.map((item) => (
          <div key={"fonctionnalité pour " + item.label}>
            {item.img}
            <h5>{item.label}</h5>
          </div>
        ))}
      </div>
      <div className="dh-last-section">
        <Card title={"Mes Stocks"} cardData={stocks} />
        <Card title={"Commandez vos fournitures"} cardData={fournitures} />
      </div>
    </section>
  );
};

export default DashboardHomeLeft;
