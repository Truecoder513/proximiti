import React from "react";
import { CalendarIcon } from "../../../assets/icons/Icons.js";
import { interventions } from "../../../dataRaws/CardData.js";
import { profilData } from "../../../dataRaws/ProfilData.js";
import { DatePicker } from "../../../ui-kits/DatePicker.js";
import { Card, Profile } from "../../../ui-kits/kits";

const DashboardHomeRight = () => {
  return (
    <section>
      <Profile profilData={profilData} />
      <div className="agenda">
        <div className="agenda-title">
          <p>Mon agenda</p>
          <CalendarIcon />
        </div>
        <div className="agenda-info">
          <p>
            Corps de métier<span>Plombier</span>
          </p>
          <p>
            Equipement
            <span>Robinetterie</span>
          </p>
          <p>
            Devis
            <span>Dépannage d’urgence</span>
          </p>
        </div>
        <p style={{ fontWeight: "bold", color: "var(--colorPrimary)" }}>
          J’inscris mes disponibilités
        </p>
        <p>Cocher les cases ou vous êtes disponibles</p>
        <div>
          <DatePicker />
        </div>
      </div>
      <Card title="Dernières interventions" cardData={interventions} />
    </section>
  );
};

export default DashboardHomeRight;
