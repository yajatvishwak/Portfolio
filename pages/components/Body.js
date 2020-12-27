import React from "react";
import style from "./Body.module.css";
const Body = () => {
  return (
    <>
      <div className={style.navigation}>
        <div> Navigation </div>
        <div className={style.dropdownContent}>
          <div className={style.pill}>Hello World</div>
          <div className={style.pill}>Hello World</div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.greetings}>Hey there, I am</div>
        <div className={style.name}>Yajat Vishwakarma</div>
      </div>
    </>
  );
};

export default Body;
