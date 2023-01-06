import React from "react";
import DashboardHomeLeft from "../routesComponents/Dashoboard/home/DashboardHomeLeft";
import DashboardHomeRight from "../routesComponents/Dashoboard/home/DashboardHomeRight";
import { ButtonWithBackground } from "../ui-kits/kits";

const DashboardHome = () => {
  return (
    <section className="dh-home">
      <DashboardHomeLeft />
      <div>
        <DashboardHomeRight />
      </div>
      <ButtonWithBackground
        label={
          <>
            <a href="">
              Une question ? Un besoin d’aide ? consulter notre aide en ligne.
            </a>
          </>
        }
      />
    </section>
  );
};

export default DashboardHome;
