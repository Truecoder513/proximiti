import React, { useState } from "react";
import {
  ArrowDownIcon,
  BellIcon,
  HamburgerMenu,
  MenuIcon,
  SearchIcon,
} from "../../../assets/icons/Icons";
import { AccountFonctionnality } from "../../../dataRaws/AccountFonctionnality";
import { Img } from "../../../ui-kits/kits";
import { openModal } from "../../../store/actions/modalActions";
import { useDispatch } from "react-redux";
import { openMenu } from "../../../store/actions/menuActions";

const DashboardHeader = () => {
  const [numberOfNotification, setNumberOFNotification] = useState(15);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="dh-header">
      <div className="dh-header-left">
        <div>
          <h1>Tableau de bord</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <span className="HamburgerMenu" onClick={() => dispatch(openMenu())}>
          <HamburgerMenu />
        </span>
      </div>
      <div className="dh-header-right">
        <div>
          <SearchIcon />
          <span className="menu" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
          </span>
          <span className="user-notification">
            {numberOfNotification} <BellIcon />
          </span>
        </div>
        <div className="userInfo">
          <Img img="Face.png" alt="userImage" />
          <span className="userName">Plombier Brisso</span>
          <span>
            <ArrowDownIcon />
          </span>
        </div>
      </div>
      {showMenu && (
        <div className="menu-item">
          {AccountFonctionnality.map((item) => (
            <div
              onClick={() => dispatch(openModal(item.modalContent))}
              key={"item " + item.label}
            >
              {item.img2 ? item.img2 : item.img}
              <p>{item.label2 ? item.label2 : item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
