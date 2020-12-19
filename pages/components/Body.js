import React from "react";
import style from "./Body.module.css";
const Body = () => {
  return (
    <div className={style.container}>
      <div className={style.greetings}>Hey there, I am</div>
      <div className={style.name}>Yajat Vishwakarma</div>
    </div>
  );
};

export default Body;
