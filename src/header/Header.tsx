import React from "react";
import s from "./Header.module.scss";
import Nav from "./Nav/Nav";
import styleContainer from "./../common/styles/Container.module.css";
import BurgerNav from "./BurgerNav/BurgerNav";


function Header() {
  return (
    <div className={s.header}>
      <div className={`${styleContainer.container} ${s.headerContainer} `}>
        <Nav />
        <BurgerNav/>
      </div>
    </div>
  );
}

export default Header;
