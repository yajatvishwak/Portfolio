import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={style.navContainer}>
        <div className={style.navEle}>About me</div>
        <div className={style.navEle}>Achievements</div>
        <div className={style.navEle}>Projects</div>
        <div className={style.navEle}>Skillset</div>
        <div className={style.navEle}>Get in Touch</div>
      </div>
    </div>
  );
};

export default Navbar;
