import React from "react";
import { dashboardLinks } from "../../dataRaws/links";
import { Img } from "../../ui-kits/kits";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import menuSelector from "../../store/selectors/menuSelector";
import { CloseRound } from "../../assets/icons/Icons";
import { closeMenu } from "../../store/actions/menuActions";
export const DashboardSideBar = () => {
  const menu = useSelector(menuSelector);
  const dispatch = useDispatch();
  return (
    <nav className={`dh-sideBar ${menu.open === true ? "show-menu" : ""}`}>
      {menu.open && (
        <span className="closeMenu" onClick={() => dispatch(closeMenu())}>
          <CloseRound />
        </span>
      )}
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
