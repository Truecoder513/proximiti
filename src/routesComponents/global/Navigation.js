import React from "react";
import { dashboardLinks } from "../../dataRaws/links";
import { Img } from "../../ui-kits/kits";
import { Link } from "react-router-dom";
export const DashboardSideBar = () => {
  return (
    <nav className="dh-sideBar">
      <ul>
        {dashboardLinks.map((item) => (
          <li key={"lien vers " + item.route}>
            <Link to={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="dh-filigrane">
        <Img img="filigrame.png" alt="filigrame" />
      </div>
    </nav>
  );
};
