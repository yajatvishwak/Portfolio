import React from "react";
import style from "./ContactPage.module.css";
import SocialCard from "./SocialCard";
const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Reach me out</div>
      <div className={style.cardContainer}>
        <SocialCard logo="github" />
        <SocialCard logo="instagram" />
        <SocialCard logo="gmail" />
        <SocialCard logo="twitter" />
      </div>
    </div>
  );
};

export default ContactPage;
